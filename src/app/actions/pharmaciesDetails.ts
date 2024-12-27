"use server"

import { NextRequest } from "next/server"
import nodemailer from "nodemailer";

export const pharmaciesDetails = async(formdata: FormData) => {
    console.log("formdata:", formdata)
    const data = {
        pharmacyName: formdata.get("pharmacyName"),
        email: formdata.get("email"),
        mobile: formdata.get("mobile"),
        address: formdata.get("address"),
        pincode: formdata.get("pincode"),
        pharmacyType: formdata.get("pharmacyType"),
        yearsOfOperation: formdata.get("yearsOfOperation"),
        labLicenseNumber: formdata.get("labLicenseNumber"),
        dateOfIssue: formdata.get("dateOfIssue"),
        issuingAuthority: formdata.get("issuingAuthority"),
        compliantOrnot: formdata.get("compliantOrnot")
    }

    const response = await fetch("https://crowdshaki.vercel.app/api/pharmacies", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

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
        html: `<p>A new GPA form has been submitted. Here are the details:</p><pre>${JSON.stringify(
          data,
          null,
          2
        )}</pre>`, // HTML body
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
}