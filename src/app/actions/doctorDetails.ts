"use server";

import { NextRequest } from "next/server";

export const doctorDetails = async (formData: FormData) => {
    console.log("Form Data:", formData);

    const data = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        email: formData.get("email") as string,
        residentialAddress: formData.get("residentialAddress") as string,
        clinicAddress: formData.get("clinicAddress") as string,
        dateOfBirth: formData.get("dateOfBirth") as string,
        primarySpecialty: formData.get("primarySpecialty") as string,
        subSpecialties: formData.get("subSpecialties") as string,
        medicalRegistrationNumber: formData.get("medicalRegistrationNumber") as string,
        medicalCouncil: formData.get("medicalCouncil") as string,
        registrationDate: formData.get("registrationDate") as string,
        degree: formData.get("degree") as string,
        institution: formData.get("institution") as string,
        yearOfPassing: formData.get("yearOfPassing") as string,
        totalExperience: formData.get("totalExperience") as string,
        specializationExperience: formData.get("specializationExperience") as string,
        clinicHospitalName: formData.get("clinicHospitalName") as string,
        designation: formData.get("designation") as string,
        medicalAssociations: formData.get("medicalAssociations") as string,
        teleconsultationExperience: formData.get("teleconsultationExperience") as string,
        teleconsultationDetails: formData.get("teleconsultationDetails") as string,
        preferredDays: formData.getAll("preferredDays") as string[],
        preferredTimeSlots: formData.getAll("preferredTimeSlots") as string[],
        infrastructure: {
            computerSmartphone: formData.get("computerSmartphone") as string,
            internetConnection: formData.get("internetConnection") as string,
            platformUsed: formData.get("platformUsed") as string,
        },
        additionalCertifications: formData.get("additionalCertifications") as string,
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

    const result = await response.json();
    return result;
};
