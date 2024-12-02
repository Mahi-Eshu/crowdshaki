"use client";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const today = new Date().toISOString().split("T")[0]; // Generate today's date in YYYY-MM-DD format

interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    residentialAddress: string;
    clinicAddress: string;
    dateOfBirth: string;
    primarySpecialty: string;
    subSpecialties: string;
    medicalRegistrationNumber: string;
    medicalCouncil: string;
    registrationDate: string;
    degree: string;
    institution: string;
    yearOfPassing: string;
    totalExperience: string;
    specializationExperience: string;
    clinicHospitalName: string;
    designation: string;
    medicalAssociations: string;
    teleconsultationExperience: string; // Assuming this is a string for now, you can adjust if it should be boolean
    teleconsultationDetails: string;
    preferredDays: string[]; // Array of strings for days
    preferredTimeSlots: string[]; // Array of strings for time slots
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
        firstName: "",
        lastName: "",
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

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleCheckboxChange = (e: any) => {
        const { name, value, checked } = e.target;
        setFormData((prev:any) => {
            const updatedValues = checked
                ? [...prev[name], value]
                : prev[name].filter((item: any) => item !== value);
            return { ...prev, [name]: updatedValues };
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
        // Call your action or API here
    };

    return (
        <main className="md:px-8 md:py-4 shadow-xl md:border-2 md:border-gray-200">
            <Navbar />
            <h1 className="font-semibold text-[24px] my-8 lg:text-[28px] xl:text-[34px] text-center">
                Specialist Doctors Application Form
            </h1>
            <form onSubmit={handleSubmit} className="p-4 lg:max-w-[1000px] xl:lg:max-w-[1200px] mx-auto">
                {/* Section 1: Personal Information */}
                <h2 className="text-2xl font-medium mb-4">1. Personal Information</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="firstName" className="block font-medium mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block font-medium mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Last Name"
                        />
                    </div>
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
                    <label
                        htmlFor="residentialAddress"
                        className="block font-medium mb-2"
                    >
                        Residential Address
                    </label>
                    <input
                        type="text"
                        id="residentialAddress"
                        name="residentialAddress"
                        value={formData.residentialAddress}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded bg-gray-100"
                        placeholder="Enter Residential Address"
                    />
                </div>

                <div>
                    <label htmlFor="clinicAddress" className="block font-medium mb-2">
                        Clinic/Hospital Address
                    </label>
                    <input
                        type="text"
                        id="clinicAddress"
                        name="clinicAddress"
                        value={formData.clinicAddress}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded bg-gray-100"
                        placeholder="Enter Clinic Address"
                    />
                </div>

                <div>
                    <label htmlFor="dateOfBirth" className="block font-medium mb-2">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded bg-gray-100"
                    />
                </div>

                {/* Section 2: Professional Information */}
                <h2 className="text-2xl font-medium mt-8 mb-4">2. Professional Information</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="primarySpecialty" className="block font-medium mb-2">
                            Primary Specialty
                        </label>
                        <input
                            type="text"
                            id="primarySpecialty"
                            name="primarySpecialty"
                            value={formData.primarySpecialty}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Primary Specialty"
                        />
                    </div>
                    <div>
                        <label htmlFor="subSpecialties" className="block font-medium mb-2">
                            Sub-Specialties (if any)
                        </label>
                        <input
                            type="text"
                            id="subSpecialties"
                            name="subSpecialties"
                            value={formData.subSpecialties}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Sub-Specialties"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="medicalRegistrationNumber" className="block font-medium mb-2">
                            Medical Registration Number
                        </label>
                        <input
                            type="text"
                            id="medicalRegistrationNumber"
                            name="medicalRegistrationNumber"
                            value={formData.medicalRegistrationNumber}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Registration Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="medicalCouncil" className="block font-medium mb-2">
                            State/National Medical Council
                        </label>
                        <input
                            type="text"
                            id="medicalCouncil"
                            name="medicalCouncil"
                            value={formData.medicalCouncil}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Medical Council"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="registrationDate" className="block font-medium mb-2">
                            Date of Registration
                        </label>
                        <input
                            type="date"
                            id="registrationDate"
                            name="registrationDate"
                            value={formData.registrationDate}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="degree" className="block font-medium mb-2">
                            Degree
                        </label>
                        <input
                            type="text"
                            id="degree"
                            name="degree"
                            value={formData.degree}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Degree"
                        />
                    </div>
                    <div>
                        <label htmlFor="institution" className="block font-medium mb-2">
                            Institution
                        </label>
                        <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Institution"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="yearOfPassing" className="block font-medium mb-2">
                            Year of Passing
                        </label>
                        <input
                            type="number"
                            id="yearOfPassing"
                            name="yearOfPassing"
                            value={formData.yearOfPassing}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Year of Passing"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="totalExperience" className="block font-medium mb-2">
                            Total Years of Experience
                        </label>
                        <input
                            type="number"
                            id="totalExperience"
                            name="totalExperience"
                            value={formData.totalExperience}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Total Years of Experience"
                        />
                    </div>
                    <div>
                        <label htmlFor="specializationExperience" className="block font-medium mb-2">
                            Years of Experience in Specialization
                        </label>
                        <input
                            type="number"
                            id="specializationExperience"
                            name="specializationExperience"
                            value={formData.specializationExperience}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Years of Specialization Experience"
                        />
                    </div>
                </div>

                {/* Section 3: Professional Practice */}
                <h2 className="text-2xl font-medium mt-8 mb-4">3. Professional Practice</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="clinicHospitalName" className="block font-medium mb-2">
                            Clinic/Hospital Name
                        </label>
                        <input
                            type="text"
                            id="clinicHospitalName"
                            name="clinicHospitalName"
                            value={formData.clinicHospitalName}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Clinic/Hospital Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="designation" className="block font-medium mb-2">
                            Designation
                        </label>
                        <input
                            type="text"
                            id="designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Enter Designation"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="medicalAssociations" className="block font-medium mb-2">
                            Medical Associations/Societies
                        </label>
                        <textarea
                            id="medicalAssociations"
                            name="medicalAssociations"
                            value={formData.medicalAssociations}
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="List Medical Associations/Societies"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="teleconsultationExperience" className="block font-medium mb-2">
                        Previous Teleconsultation Experience
                    </label>
                    <select
                        id="teleconsultationExperience"
                        name="teleconsultationExperience"
                        value={formData.teleconsultationExperience}
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

                {/* Conditional field for additional details if teleconsultationExperience is "Yes" */}
                {formData.teleconsultationExperience === "Yes" && (
                    <div className="mt-4">
                        <label htmlFor="teleconsultationDetails" className="block font-medium mb-2">
                            If Yes, please provide details:
                        </label>
                        <textarea
                            id="teleconsultationDetails"
                            name="teleconsultationDetails"
                            value={formData.teleconsultationDetails || ""} // Default to empty if not set
                            onChange={handleInputChange}
                            className="w-full p-2 rounded bg-gray-100"
                            placeholder="Provide details of previous teleconsultation experience"
                        />
                    </div>
                )}


                {/* Section 4: Availability for Teleconsultation */}
                <h2 className="text-2xl font-medium mt-8 mb-4">4. Availability for Teleconsultation</h2>
                <div className="flex flex-col gap-4">
                    {/* Preferred Days */}
                    <div>
                        <label className="block font-medium mb-2">
                            Preferred Days for Teleconsultation
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day: any) => (
                                <label key={day} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="preferredDays"
                                        value={day}
                                        checked={formData.preferredDays.includes(day)}
                                        onChange={handleCheckboxChange}
                                        className="mr-2"
                                    />
                                    {day}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Preferred Time Slots */}
                    <div>
                        <label className="block font-medium mb-2">Preferred Time Slots</label>
                        <div className="flex flex-wrap gap-2">
                            {["Morning", "Afternoon", "Evening"].map((slot) => (
                                <label key={slot} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="preferredTimeSlots"
                                        value={slot}
                                        checked={formData.preferredTimeSlots.includes(slot)}
                                        onChange={handleCheckboxChange}
                                        className="mr-2"
                                    />
                                    {slot}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 5: Infrastructure and Technology */}
                <h2 className="text-2xl font-medium mt-8 mb-4">5. Infrastructure and Technology</h2>
                <div className="flex flex-col gap-4">
                    {/* Computer/Smartphone Availability */}
                    <div>
                        <label htmlFor="computerSmartphone" className="block font-medium mb-2">
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
                        <label htmlFor="internetConnection" className="block font-medium mb-2">Reliable Internet Connection</label>
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
                <h2 className="text-2xl font-medium mt-8 mb-4">6. Compliance and Certifications</h2>
                <div className="flex flex-col gap-4">
                    {/* Additional Certifications */}
                    <div>
                        <label htmlFor="additionalCertifications" className="block font-medium mb-2">
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
                <h2 className="text-2xl font-medium mt-8 mb-4">7. Declaration and Undertaking</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-gray-700">
                            I, the undersigned, hereby declare that the information provided in this application
                            is true and correct to the best of my knowledge. I understand that any false information
                            may lead to disqualification from the empanelment process. I agree to comply with all
                            the terms and conditions set forth by the G Care Project.
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
                <h2 className="text-2xl font-medium mt-8 mb-4">8. Checklist of Documents to be Attached</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-gray-700">
                            Please upload the required documents as listed below. Ensure all files are in the correct format (e.g., PDF, JPG, PNG).
                        </p>
                    </div>

                    {/* Medical Registration Certificate */}
                    <div>
                        <label htmlFor="medicalRegistrationCertificate" className="block font-medium mb-2">
                            Copy of Medical Registration Certificate
                        </label>
                        <input
                            type="file"
                            id="medicalRegistrationCertificate"
                            name="medicalRegistrationCertificate"
                            onChange={(e:any) => setFormData({
                                ...formData,
                                medicalRegistrationCertificate: e.target.files[0]
                            })}
                            className="w-full p-2 rounded bg-gray-100"
                        />
                    </div>

                    {/* Qualification Certificates */}
                    <div>
                        <label htmlFor="qualificationCertificates" className="block font-medium mb-2">
                            Copies of Qualification Certificates
                        </label>
                        <input
                            type="file"
                            id="qualificationCertificates"
                            name="qualificationCertificates"
                            multiple
                            onChange={(e:any) => setFormData({
                                ...formData,
                                qualificationCertificates: Array.from(e.target.files)
                            })}
                            className="w-full p-2 rounded bg-gray-100"
                        />
                    </div>

                    {/* Proof of Experience */}
                    <div>
                        <label htmlFor="proofOfExperience" className="block font-medium mb-2">
                            Proof of Experience (Letter of Employment, Practice License, etc.)
                        </label>
                        <input
                            type="file"
                            id="proofOfExperience"
                            name="proofOfExperience"
                            onChange={(e:any) => setFormData({
                                ...formData,
                                proofOfExperience: e.target.files[0]
                            })}
                            className="w-full p-2 rounded bg-gray-100"
                        />
                    </div>

                    {/* Additional Certifications */}
                    <div>
                        <label htmlFor="additionalCertificationsFile" className="block font-medium mb-2">
                            Any Additional Certifications (Telemedicine, etc.)
                        </label>
                        <input
                            type="file"
                            id="additionalCertificationsFile"
                            name="additionalCertificationsFile"
                            onChange={(e:any) => setFormData({
                                ...formData,
                                additionalCertificationsFile: e.target.files[0]
                            })}
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
                            onChange={(e:any) => setFormData({
                                ...formData,
                                otherDocuments: Array.from(e.target.files)
                            })}
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
