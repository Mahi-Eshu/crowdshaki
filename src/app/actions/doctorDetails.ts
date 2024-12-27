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

export const doctorDetails = async (formData: FormData) => {
  console.log("Form Data:", formData);

  const data = {
    // firstName: formData.get("firstName") as string,
    doctorName: formData.get("doctorName") as string,
    phoneNumber: formData.get("phoneNumber") as string,
    email: formData.get("email") as string,
    residentialAddress: formData.get("residentialAddress") as string,
    clinicAddress: formData.get("clinicAddress") as string,
    dateOfBirth: formData.get("dateOfBirth") as string,
    primarySpecialty: formData.get("primarySpecialty") as string,
    subSpecialties: formData.get("subSpecialties") as string,
    medicalRegistrationNumber: formData.get(
      "medicalRegistrationNumber"
    ) as string,
    medicalCouncil: formData.get("medicalCouncil") as string,
    registrationDate: formData.get("registrationDate") as string,
    degree: formData.get("degree") as string,
    institution: formData.get("institution") as string,
    yearOfPassing: formData.get("yearOfPassing") as string,
    totalExperience: formData.get("totalExperience") as string,
    specializationExperience: formData.get(
      "specializationExperience"
    ) as string,
    clinicHospitalName: formData.get("clinicHospitalName") as string,
    designation: formData.get("designation") as string,
    medicalAssociations: formData.get("medicalAssociations") as string,
    teleconsultationExperience: formData.get(
      "teleconsultationExperience"
    ) as string,
    teleconsultationDetails: formData.get("teleconsultationDetails") as string,
    preferredDays: formData.getAll("preferredDays") as string[],
    preferredTimeSlots: formData.getAll("preferredTimeSlots") as string[],
    infrastructure: {
      computerSmartphone: formData.get("computerSmartphone") as string,
      internetConnection: formData.get("internetConnection") as string,
      platformUsed: formData.get("platformUsed") as string,
    },
    additionalCertifications: formData.get(
      "additionalCertifications"
    ) as string,
    compliance: formData.get("compliance") as string,
    signature: formData.get("signature") as string,
    declarationDate: formData.get("declarationDate") as string,
    // medicalRegistrationCertificate: formData.get("medicalRegistrationCertificate") as File | null,
    // qualificationCertificates: formData.getAll("qualificationCertificates") as File[],
    // proofOfExperience: formData.get("proofOfExperience") as File | null,
    // additionalCertificationsFile: formData.get("additionalCertificationsFile") as File | null,
    // otherDocuments: formData.getAll("otherDocuments") as File[],
  };

  const response = await fetch("https://crowdshaki.vercel.app/api/doctors", {
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
