"use server";

import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

function generateHtmlTable(data: any): string {
  const generateRows = (obj: any): string => {
    return Object.entries(obj)
      .map(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
          // Nested object handling
          return `
                          <tr>
                              <td style="font-weight: bold;" colspan="2">${key}</td>
                          </tr>
                          ${generateRows(value)}
                      `;
        } else {
          return `
                          <tr>
                              <td style="font-weight: bold;">${key}</td>
                              <td>${
                                Array.isArray(value) ? value.join(", ") : value
                              }</td>
                          </tr>
                      `;
        }
      })
      .join("");
  };

  return `
          <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
              <thead>
                  <tr style="background-color: #f2f2f2;">
                      <th style="text-align: left;">Field</th>
                      <th style="text-align: left;">Value</th>
                  </tr>
              </thead>
              <tbody>
                  ${generateRows(data)}
              </tbody>
          </table>
      `;
}

export const medDetails = async (formdata: FormData) => {
  console.log("formdata:", formdata);

  const data = {
    labName: formdata.get("labName"),
    ownerName: formdata.get("ownerName"),
    email: formdata.get("email"),
    mobile: formdata.get("mobile"),
    address: formdata.get("address"),
    pincode: formdata.get("pincode"),
    labType: formdata.get("labType"),
    yearsOfOperation: formdata.get("yearsOfOperation"),
    labLicenseNumber: formdata.get("labLicenseNumber"),
    dateOfIssue: formdata.get("dateOfIssue"),
    issuingAuthority: formdata.get("issuingAuthority"),
    pathologistCount: formdata.get("pathologistCount"),
    technicianCount: formdata.get("technicianCount"),
    compliantOrnot: formdata.get("compliantOrnot"),
  };

  const response = await fetch(
    "https://crowdshaki.vercel.app/api/medical_insitutions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const apiResult = await response.json();

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your email provider's SMTP host
    port: 587, // Port for TLS
    secure: false, // Set true for 465, false for other ports
    auth: {
      user: "theweekendcodershq@gmail.com", // Your email
      pass: "dxcu wldi esra ejgd", // Your email password
    },
  });

  // Email content
  const mailOptions = {
    from: 'theweekendcodershq@gmail.com', // Sender address
    to: `theweekendcodershq@gmail.com, aishwaryaraishwaryar001@gmail.com, ${data.email}`, // List of recipients
    subject: "New GPA Details Submitted", // Subject line
    text: `A new GPA form has been submitted. Here are the details:\n\n${JSON.stringify(
      data,
      null,
      2
    )}`, // Plain text body
    html: `
        <p>A new GPA form has been submitted. Here are the details:</p>
        ${generateHtmlTable(data)}
    `, // HTML body
  };

  // Send email
  try {
    const emailResult = await transporter.sendMail(mailOptions);
    console.log("Email sent:", emailResult);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow error if email sending fails
  }

  console.log(apiResult);
  return { apiResult, emailSent: true };
};
