"use server";

import { NextRequest } from "next/server";

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
        teleconsultationExperience: formData.get("teleconsultationExperience") === "true",
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

    const result = await response.json();
    console.log(result);
    return result;
};
