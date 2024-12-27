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

export const gpaDetails = async (formData: FormData) => {
  console.log("Form Data:", formData);

  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    email: formData.get("email") as string,
    residentialAddress: formData.get("residentialAddress") as string,
    clinicAddress: formData.get("clinicAddress") as string,
    dob: formData.get("dob") as string,
    medicalRegNumber: formData.get("medicalRegNumber") as string,
    medicalCouncil: formData.get("medicalCouncil") as string,
    dateOfReg: formData.get("dateOfReg") as string,
    qualification: formData.get("qualification") as string,
    institution: formData.get("institution") as string,
    yearOfPassing: formData.get("yearOfPassing") as string,
    totalExperience: formData.get("totalExperience") as string,
    gpExperience: formData.get("gpExperience") as string,
    hospitalName: formData.get("hospitalName") as string,
    designation: formData.get("designation") as string,
    affiliations: formData.get("affiliations") as string,
    teleconsultationExperience:
      formData.get("teleconsultationExperience") === "true",
    teleconsultationDetails: formData.get("teleconsultationDetails") as string,
    preferredDays: formData.getAll("preferredDays") as string[],
    preferredTimeSlots: formData.getAll("preferredTimeSlots") as string[],
    hasComputer: formData.get("hasComputer") === "true",
    hasInternet: formData.get("hasInternet") === "true",
    platformUsed: formData.get("platformUsed") as string,
    certifications: formData.get("certifications") as string,
    compliantWithGuidelines: formData.get("compliantWithGuidelines") === "true",
    signature: formData.get("signature") as string,
    date: formData.get("date") as string,
  };

  const response = await fetch("https://crowdshaki.vercel.app/api/gpa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

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
    from: '"Amar" theweekendcodershq@gmail.com', // Sender address
    to: `theweekendcodershq@gmail.com, aishwaryar001@gmail.com, ${data.email}`, // List of recipients
    subject: "New GPA Details Submitted", // Subject line
    text: `A new GPA form has been submitted. Here are the details:\n\n${JSON.stringify(
      data,
      null,
      2
    )}`, // Plain text body
    html: `
        <p>A new GPA form has been submitted. Here are the details:</p>
        ${generateHtmlTable(data)}
    `,
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
