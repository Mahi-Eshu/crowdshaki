"use client";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { doctorDetails } from "@/app/actions/doctorDetails";

const today = new Date().toISOString().split("T")[0]; // Generate today's date in YYYY-MM-DD format

interface FormData {
  // firstName: string;
  institutionName: string;
  address: string;
  phoneNumber: string;
  landlineNumber: string;
  email: string;
  website: string;
  registrationNumber: string;
  registrationDate: string;
  accreditationDetails: string;
  principalName: string;
  principalMobile: string;
  principalEmail: string;
  primaryContact: string;
  primaryContactDesignation: string;
  primaryContactMobile: string;
  primaryContactEmail: string;
  noOfBeds: string;
  icuBeds: string;
  emergencyBeds: string;
  services: string[]; // Array of strings for days
  availability: string[]; // Array of strings for time slots

  infrastructure: {
    computerSmartphone: string;
    internetConnection: string;
    platformUsed: string;
  };
  additionalCertifications: string;
  compliance: string;
  signature: string;
  declarationDate: string; // Assuming 'today' is a string (ISO format)
  medicalRegistrationCertificate: File | null; // Assuming file upload
  qualificationCertificates: File[]; // Array of files
  proofOfExperience: File | null; // Assuming file upload
  additionalCertificationsFile: File | null; // Assuming file upload
  otherDocuments: File[]; // Array of files
}

const DoctorForm = () => {
  const [formData, setFormData] = useState<FormData>({
    // firstName: "",
    doctorName: "",
    phoneNumber: "",
    email: "",
    residentialAddress: "",
    clinicAddress: "",
    dateOfBirth: "",
    primarySpecialty: "",
    subSpecialties: "",
    medicalRegistrationNumber: "",
    medicalCouncil: "",
    registrationDate: "",
    degree: "",
    institution: "",
    yearOfPassing: "",
    totalExperience: "",
    specializationExperience: "",
    clinicHospitalName: "",
    designation: "",
    medicalAssociations: "",
    teleconsultationExperience: "",
    teleconsultationDetails: "",
    preferredDays: [],
    preferredTimeSlots: [],
    infrastructure: {
      computerSmartphone: "",
      internetConnection: "",
      platformUsed: "",
    },
    additionalCertifications: "",
    compliance: "",
    signature: "",
    declarationDate: today,
    medicalRegistrationCertificate: null,
    qualificationCertificates: [],
    proofOfExperience: null,
    additionalCertificationsFile: null,
    otherDocuments: [],
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from submitting on load/reload

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    await doctorDetails(data);
  };

  return (
    <main className="md:px-8 md:py-4 shadow-xl md:border-2 md:border-gray-200">
      <Navbar />
      <h1 className="font-semibold text-[24px] my-8 lg:text-[28px] xl:text-[34px] text-center">
        Specialist Doctors Application Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="p-4 lg:max-w-[1000px] xl:lg:max-w-[1200px] mx-auto"
      >
        {/* Section 1: Personal Information */}
        <h2 className="text-2xl font-medium mb-4">Section 1. General Information</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="institutionName" className="block font-medium mb-2">
              Institution Name
            </label>
            <input
              type="text"
              id="institutionName"
              name="institutionName"
              value={formData.institutionName}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="Enter Institution Name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-100"
            placeholder="Enter Residential Address"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="phoneNumber" className="block font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="Enter Phone Number"
            />
          </div>
          <div>
            <label htmlFor="landlineNumber" className="block font-medium mb-2">
              Landline Number
            </label>
            <input
              type="text"
              id="landlineNumber"
              name="landlineNumber"
              value={formData.landlineNumber}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="Enter Phone Number"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="Enter Email Address"
            />
          </div>
        </div>

        <div>
          <label htmlFor="website" className="block font-medium mb-2">
            Website (if available)
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-100"
            placeholder="Enter Clinic Address"
          />
        </div>

        <div>
          <label
            htmlFor="registrationNumber"
            className="block font-medium mb-2"
          >
            Registration Number
          </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label htmlFor="registrationDate" className="block font-medium mb-2">
            Date of Registration
          </label>
          <input
            type="text"
            id="registrationDate"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="accreditationDetails"
            className="block font-medium mb-2"
          >
            Accreditation Details
          </label>
          <input
            type="text"
            id="accreditationDetails"
            name="accreditationDetails"
            value={formData.accreditationDetails}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-gray-100"
          />
        </div>

        <h2 className="text-2xl font-medium mb-4">
        Section 2. Administrative Information
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="principalName" className="block font-medium mb-2">
              Principal/Dean Name
            </label>
            <input
              type="text"
              id="principalName"
              name="principalName"
              value={formData.principalName}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="Enter Medical Council"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="principalMobile" className="block font-medium mb-2">
              Principal/Dean Mobile
            </label>
            <input
              type="text"
              id="principalMobile"
              name="principalMobile"
              value={formData.principalMobile}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="principalEmail" className="block font-medium mb-2">
              Principal/Dean Email
            </label>
            <input
              type="text"
              id="principalEmail"
              name="principalEmail"
              value={formData.principalEmail}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="primaryContact" className="block font-medium mb-2">
              Primary Contact person Name for GCare project
            </label>
            <input
              type="text"
              id="primaryContact"
              name="primaryContact"
              value={formData.primaryContact}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="primaryContactDesignation"
              className="block font-medium mb-2"
            >
              Primary Contact person designation
            </label>
            <input
              type="text"
              id="primaryContactDesignation"
              name="primaryContactDesignation"
              value={formData.primaryContactDesignation}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="primaryContactMobile"
              className="block font-medium mb-2"
            >
              Primary Contact person mobile
            </label>
            <input
              type="text"
              id="primaryContactMobile"
              name="primaryContactMobile"
              value={formData.primaryContactMobile}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="primaryContactEmail"
              className="block font-medium mb-2"
            >
              Primary Contact person email
            </label>
            <input
              type="text"
              id="primaryContactEmail"
              name="primaryContactEmail"
              value={formData.primaryContactEmail}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <h2 className="text-2xl font-medium mb-4">Section 3. Hospital Information</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="noOfBeds" className="block font-medium mb-2">
              Total Number of beds
            </label>
            <input
              type="text"
              id="noOfBeds"
              name="noOfBeds"
              value={formData.noOfBeds}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="icuBeds" className="block font-medium mb-2">
              ICU beds
            </label>
            <input
              type="number"
              id="icuBeds"
              name="icuBeds"
              value={formData.icuBeds}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="emergencyBeds" className="block font-medium mb-2">
              Emergency Beds
            </label>
            <input
              type="number"
              id="emergencyBeds"
              name="emergencyBeds"
              value={formData.emergencyBeds}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="Enter Degree"
            />
          </div>
        </div>


        {/* Section 4: Availability for Teleconsultation */}
        <h2 className="text-2xl font-medium mt-8 mb-4">
          Section 4. Availability for Teleconsultation
        </h2>
        <section>
          <hr className="mb-4" />
          <div>
            <label className="block font-medium mb-2">Services Offered</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Teleconsultation Services",
                "Surgeries",
                "Impatient Services",
                "Emergency Care",
                "Trauma Care",
                "Diagnostics",
                "Follow-up Care",
              ].map((serviceType: any) => (
                <label key={serviceType} className="flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    value={serviceType}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFormData((prev: any) => ({
                        ...prev,
                        services: prev.services.includes(value)
                          ? prev.services.filter((d: any) => d !== value)
                          : [...prev.services, value],
                      }));
                    }}
                    checked={formData.services.includes(serviceType)}
                    className="mr-2"
                  />
                  {serviceType}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="availability"
              className="block font-medium mb-2"
            >
              Emergency Care Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            >
              <option value="" disabled>
                Select your choice
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </section>

        {/* Section 5: Infrastructure and Technology */}
        <h2 className="text-2xl font-medium mt-8 mb-4">
          5. Infrastructure and Technology
        </h2>
        <div className="flex flex-col gap-4">
          {/* Computer/Smartphone Availability */}
          <div>
            <label
              htmlFor="computerSmartphone"
              className="block font-medium mb-2"
            >
              Availability of Computer/Smartphone
            </label>
            <select
              id="computerSmartphone"
              name="infrastructure.computerSmartphone"
              value={formData.infrastructure.computerSmartphone}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            >
              <option value="" disabled>
                Select your choice
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Internet Connection Availability */}
          <div>
            <label
              htmlFor="internetConnection"
              className="block font-medium mb-2"
            >
              Reliable Internet Connection
            </label>
            <select
              id="internetConnection"
              name="infrastructure.internetConnection"
              value={formData.infrastructure.internetConnection}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            >
              <option value="" disabled>
                Select your choice
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Teleconsultation Platform */}
          <div>
            <label htmlFor="platformUsed" className="block font-medium mb-2">
              Teleconsultation Platform Used (if any)
            </label>
            <input
              type="text"
              id="platformUsed"
              name="infrastructure.platformUsed"
              value={formData.infrastructure.platformUsed || ""}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="Enter platform name (e.g., Zoom, Google Meet)"
            />
          </div>
        </div>

        {/* Section 6: Compliance and Certifications */}
        <h2 className="text-2xl font-medium mt-8 mb-4">
          6. Compliance and Certifications
        </h2>
        <div className="flex flex-col gap-4">
          {/* Additional Certifications */}
          <div>
            <label
              htmlFor="additionalCertifications"
              className="block font-medium mb-2"
            >
              Any Additional Certifications (Telemedicine, etc.)
            </label>
            <textarea
              id="additionalCertifications"
              name="additionalCertifications"
              value={formData.additionalCertifications}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="List additional certifications (if any)"
            />
          </div>

          {/* Compliance with National Telemedicine Guidelines */}
          <div>
            <label htmlFor="compliance" className="block font-medium mb-2">
              Compliance with National Telemedicine Guidelines
            </label>
            <select
              id="compliance"
              name="compliance"
              value={formData.compliance}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            >
              <option value="" disabled>
                Select your choice
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* Section 7: Declaration and Undertaking */}
        <h2 className="text-2xl font-medium mt-8 mb-4">
          7. Declaration and Undertaking
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-gray-700">
              I, the undersigned, hereby declare that the information provided
              in this application is true and correct to the best of my
              knowledge. I understand that any false information may lead to
              disqualification from the empanelment process. I agree to comply
              with all the terms and conditions set forth by the G Care Project.
            </p>
          </div>

          {/* Signature */}
          <div>
            <label htmlFor="signature" className="block font-medium mb-2">
              Signature (Full Name)
            </label>
            <input
              type="text"
              id="signature"
              name="signature"
              value={formData.signature || ""}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
              placeholder="Enter your full name as a signature"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="declarationDate" className="block font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              id="declarationDate"
              name="declarationDate"
              value={formData.declarationDate || ""}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        {/* Section 8: Checklist of Documents to be Attached */}
        <h2 className="text-2xl font-medium mt-8 mb-4">
          8. Checklist of Documents to be Attached
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-gray-700">
              Please upload the required documents as listed below. Ensure all
              files are in the correct format (e.g., PDF, JPG, PNG).
            </p>
          </div>

          {/* Medical Registration Certificate */}
          <div>
            <label
              htmlFor="medicalRegistrationCertificate"
              className="block font-medium mb-2"
            >
              Copy of Medical Registration Certificate
            </label>
            <input
              type="file"
              id="medicalRegistrationCertificate"
              name="medicalRegistrationCertificate"
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  medicalRegistrationCertificate: e.target.files[0],
                })
              }
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>

          {/* Qualification Certificates */}
          <div>
            <label
              htmlFor="qualificationCertificates"
              className="block font-medium mb-2"
            >
              Copies of Qualification Certificates
            </label>
            <input
              type="file"
              id="qualificationCertificates"
              name="qualificationCertificates"
              multiple
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  qualificationCertificates: Array.from(e.target.files),
                })
              }
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>

          {/* Proof of Experience */}
          <div>
            <label
              htmlFor="proofOfExperience"
              className="block font-medium mb-2"
            >
              Proof of Experience (Letter of Employment, Practice License, etc.)
            </label>
            <input
              type="file"
              id="proofOfExperience"
              name="proofOfExperience"
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  proofOfExperience: e.target.files[0],
                })
              }
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>

          {/* Additional Certifications */}
          <div>
            <label
              htmlFor="additionalCertificationsFile"
              className="block font-medium mb-2"
            >
              Any Additional Certifications (Telemedicine, etc.)
            </label>
            <input
              type="file"
              id="additionalCertificationsFile"
              name="additionalCertificationsFile"
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  additionalCertificationsFile: e.target.files[0],
                })
              }
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>

          {/* Other Relevant Documents */}
          <div>
            <label htmlFor="otherDocuments" className="block font-medium mb-2">
              Any Other Relevant Documents
            </label>
            <input
              type="file"
              id="otherDocuments"
              name="otherDocuments"
              multiple
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  otherDocuments: Array.from(e.target.files),
                })
              }
              className="w-full p-2 rounded bg-gray-100"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 p-4 bg-black text-white rounded w-full"
        >
          Submit Application
        </button>
      </form>
      <Footer />
    </main>
  );
};

export default DoctorForm;
