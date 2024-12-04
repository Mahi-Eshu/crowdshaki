"use server";

import { NextRequest } from "next/server";

export const hospitalDetails = async (formData: FormData) => {
    console.log("Form Data:", formData);

    const data = {
        hospitalName: formData.get("hospitalName") as string,
        address: formData.get("address") as string,
        street: formData.get("street") as string,
        city: formData.get("city") as string,
        state: formData.get("state") as string,
        pincode: formData.get("pincode") as string,
        country: formData.get("country") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        email: formData.get("email") as string,
        website: formData.get("website") as string,
        registrationNumber: formData.get("registrationNumber") as string,
        dateOfRegistration: formData.get("dateOfRegistration") as string,
        accreditationDetails: formData.get("accreditationDetails") as string,
        medicalDirector: formData.get("medicalDirector") as string,
        directorContact: formData.get("directorContact") as string,
        directorEmail: formData.get("directorEmail") as string,
        primaryContactName: formData.get("primaryContactName") as string,
        primaryContactDesignation: formData.get("primaryContactDesignation") as string,
        primaryContactNumber: formData.get("primaryContactNumber") as string,
        primaryContactEmail: formData.get("primaryContactEmail") as string,
        totalBeds: formData.get("totalBeds") as string,
        icuBeds: formData.get("icuBeds") as string,
        emergencyBeds: formData.get("emergencyBeds") as string,
        specialties: formData.getAll("specialties") as string[],
        services: formData.getAll("services") as string[],
        availability: formData.get("availability") as string,
        emergencyContactNumber: formData.get("emergencyContactNumber") as string,
        doctors: formData.get("doctors") as string,
        // specialists: formData.get("specialists") as string,
        // nurses: formData.get("nurses") as string,
        residentDoctors: formData.get("residentDoctors") as string,
        // keySpecialists: {
        //     specialty: formData.get("speciality") as string,
        //     name: formData.get("name") as string,
        //     qualification: formData.get("qualification") as string,
        //     contact: formData.get("contact") as string,
        //     email: formData.get("email") as string,
        // },
        teleconsultationAvailable: formData.get("teleconsultationAvailable") as string,
        technologyDetails: formData.get("technologyDetails") as string,
        diagnosticEquipment: formData.get("diagnosticEquipment") as string,
        surgicalEquipment: formData.get("surgicalEquipment") as string,
        isoCertified: formData.get("isoCertified") as string,
        nabhAccredited: formData.get("nabhAccredited") as string,
        otherCertifications: formData.get("otherCertifications") as string,
        regulatoryCompliance: formData.get("regulatoryCompliance") as string,
        complianceDetails: formData.get("complianceDetails") as string,
        declarerName: formData.get("declarerName") as string,
        declarerDesignation: formData.get("declarerDesignation") as string,
        declarationDate: formData.get("declarationDate") as string,
        additionalDocuments: formData.get("additionalDocuments") as string,
    };

    const response = await fetch("https://crowdshaki.vercel.app/api/hospitals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = response.json();
    console.log(result);
    return result;
};
