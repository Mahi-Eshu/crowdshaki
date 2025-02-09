"use client";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { toast } from "react-toastify";

interface FormData {
    // General Information
    collegeName: string;
    abbreviation: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phoneNumber: string;
    email: string;
    website: string;
    registrationNumber: string;
    dateOfRegistration: string;
    accreditationDetails: string;

    // Administrative Information
    principalName: string;
    principalContact: string;
    principalEmail: string;
    primaryContactName: string;
    primaryContactDesignation: string;
    primaryContactNumber: string;
    primaryContactEmail: string;

    // Hospital Information
    totalBeds: string;
    icuBeds: string;
    emergencyBeds: string;
    specialties: string[];
    otherSpecialties: string;

    // Services
    services: string[];
    otherServices: string;
    emergencyAvailable: boolean;
    emergencyContact: string;

    // Staff Information
    totalDoctors: string;
    specialists: string;
    residentDoctors: string;
    nurses: string;
    keySpecialistSpecialty: string;
    keySpecialistName: string;
    keySpecialistQualification: string;
    keySpecialistContact: string;
    keySpecialistEmail: string;

    // Infrastructure
    hasTeleconsultation: boolean;
    teleconsultationDetails: string;
    diagnosticEquipment: string;
    surgicalEquipment: string;

    // Compliance
    isoCertified: boolean;
    nabhAccredited: boolean;
    otherCertifications: string;
    compliantWithStandards: boolean;
    complianceDetails: string;

    // Declaration
    signature: string;
    date: string;
}

const medInstForm = () => {
    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState<FormData>({
        // Initialize all form fields
        collegeName: "",
        abbreviation: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        phoneNumber: "",
        email: "",
        website: "",
        registrationNumber: "",
        dateOfRegistration: "",
        accreditationDetails: "",
        principalName: "",
        principalContact: "",
        principalEmail: "",
        primaryContactName: "",
        primaryContactDesignation: "",
        primaryContactNumber: "",
        primaryContactEmail: "",
        totalBeds: "",
        icuBeds: "",
        emergencyBeds: "",
        specialties: [],
        otherSpecialties: "",
        services: [],
        otherServices: "",
        emergencyAvailable: false,
        emergencyContact: "",
        totalDoctors: "",
        specialists: "",
        residentDoctors: "",
        nurses: "",
        keySpecialistSpecialty: "",
        keySpecialistName: "",
        keySpecialistQualification: "",
        keySpecialistContact: "",
        keySpecialistEmail: "",
        hasTeleconsultation: false,
        teleconsultationDetails: "",
        diagnosticEquipment: "",
        surgicalEquipment: "",
        isoCertified: false,
        nabhAccredited: false,
        otherCertifications: "",
        compliantWithStandards: false,
        complianceDetails: "",
        signature: "",
        date: today,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, arrayName: keyof FormData) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [arrayName]: checked
                ? [...(prev[arrayName] as string[]), value]
                : (prev[arrayName] as string[]).filter((item) => item !== value),
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Replace with your actual API call
            // const response = await submitMedicalCollegeForm(formData);
            toast.success("Form submitted successfully!", {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            toast.error("Error submitting form", {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <main className="md:px-8 md:py-4 shadow-xl md:border-2 md:border-gray-200">
            <Navbar />
            <h1 className="font-semibold text-3xl my-8 text-center">
                Private Medical College Application Form
            </h1>
            <div className="p-4 lg:max-w-[1000px] xl:lg:max-w-[1200px] mx-auto">
                <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Section 1: General Information */}
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Section 1: General Information</h2>
                        <hr className="mb-4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="collegeName" className="block font-medium mb-2">
                                    College Name
                                </label>
                                <input
                                    type="text"
                                    id="collegeName"
                                    name="collegeName"
                                    value={formData.collegeName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="abbreviation" className="block font-medium mb-2">
                                    Abbreviation (if any)
                                </label>
                                <input
                                    type="text"
                                    id="abbreviation"
                                    name="abbreviation"
                                    value={formData.abbreviation}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                />
                            </div>

                            {/* Address Fields */}
                            <div className="md:col-span-2">
                                <label htmlFor="street" className="block font-medium mb-2">
                                    Street Address
                                </label>
                                <textarea
                                    id="street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    rows={2}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="block font-medium mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="state" className="block font-medium mb-2">
                                    State
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="postalCode" className="block font-medium mb-2">
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="country" className="block font-medium mb-2">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            {/* Contact Information */}
                            <div>
                                <label htmlFor="phoneNumber" className="block font-medium mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="website" className="block font-medium mb-2">
                                    Website
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                />
                            </div>

                            {/* Registration Information */}
                            <div>
                                <label htmlFor="registrationNumber" className="block font-medium mb-2">
                                    Registration Number
                                </label>
                                <input
                                    type="text"
                                    id="registrationNumber"
                                    name="registrationNumber"
                                    value={formData.registrationNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="dateOfRegistration" className="block font-medium mb-2">
                                    Date of Registration
                                </label>
                                <input
                                    type="date"
                                    id="dateOfRegistration"
                                    name="dateOfRegistration"
                                    value={formData.dateOfRegistration}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label htmlFor="accreditationDetails" className="block font-medium mb-2">
                                    Accreditation Details
                                </label>
                                <textarea
                                    id="accreditationDetails"
                                    name="accreditationDetails"
                                    value={formData.accreditationDetails}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    rows={3}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Administrative Information */}
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Section 2: Administrative Information</h2>
                        <hr className="mb-4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Principal Information */}
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
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="principalContact" className="block font-medium mb-2">
                                    Principal/Dean Contact Number
                                </label>
                                <input
                                    type="tel"
                                    id="principalContact"
                                    name="principalContact"
                                    value={formData.principalContact}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="principalEmail" className="block font-medium mb-2">
                                    Principal/Dean Email
                                </label>
                                <input
                                    type="email"
                                    id="principalEmail"
                                    name="principalEmail"
                                    value={formData.principalEmail}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            {/* Primary Contact Person */}
                            <div>
                                <label htmlFor="primaryContactName" className="block font-medium mb-2">
                                    Primary Contact Person Name
                                </label>
                                <input
                                    type="text"
                                    id="primaryContactName"
                                    name="primaryContactName"
                                    value={formData.primaryContactName}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="primaryContactDesignation" className="block font-medium mb-2">
                                    Primary Contact Person Designation
                                </label>
                                <input
                                    type="text"
                                    id="primaryContactDesignation"
                                    name="primaryContactDesignation"
                                    value={formData.primaryContactDesignation}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="primaryContactNumber" className="block font-medium mb-2">
                                    Primary Contact Person Number
                                </label>
                                <input
                                    type="tel"
                                    id="primaryContactNumber"
                                    name="primaryContactNumber"
                                    value={formData.primaryContactNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="primaryContactEmail" className="block font-medium mb-2">
                                    Primary Contact Person Email
                                </label>
                                <input
                                    type="email"
                                    id="primaryContactEmail"
                                    name="primaryContactEmail"
                                    value={formData.primaryContactEmail}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Hospital Information */}
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Section 3: Hospital Information</h2>
                        <hr className="mb-4" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label htmlFor="totalBeds" className="block font-medium mb-2">
                                    Total Number of Beds
                                </label>
                                <input
                                    type="number"
                                    id="totalBeds"
                                    name="totalBeds"
                                    value={formData.totalBeds}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="icuBeds" className="block font-medium mb-2">
                                    ICU Beds
                                </label>
                                <input
                                    type="number"
                                    id="icuBeds"
                                    name="icuBeds"
                                    value={formData.icuBeds}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

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
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block font-medium mb-2">Specialties Available</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "General Medicine",
                                    "General Surgery",
                                    "Orthopedics",
                                    "Pediatrics",
                                    "Obstetrics & Gynecology",
                                    "Cardiology",
                                    "Neurology",
                                    "Oncology",
                                    "Dermatology",
                                    "ENT",
                                    "Ophthalmology",
                                    "Psychiatry",
                                ].map((specialty) => (
                                    <label key={specialty} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value={specialty}
                                            checked={formData.specialties.includes(specialty)}
                                            onChange={(e) => handleCheckboxChange(e, 'specialties')}
                                            className="mr-2"
                                        />
                                        {specialty}
                                    </label>
                                ))}
                            </div>
                            <div className="mt-4">
                                <label htmlFor="otherSpecialties" className="block font-medium mb-2">
                                    Other Specialties
                                </label>
                                <input
                                    type="text"
                                    id="otherSpecialties"
                                    name="otherSpecialties"
                                    value={formData.otherSpecialties}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    placeholder="Please specify other specialties"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Services */}
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Section 4: Services</h2>
                        <hr className="mb-4" />
                        <div className="space-y-6">
                            <div>
                                <label className="block font-medium mb-2">Services Offered</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        "Teleconsultation Services",
                                        "Surgeries",
                                        "Inpatient Services",
                                        "Emergency Care",
                                        "Trauma Care",
                                        "Diagnostics",
                                        "Follow-up Care",
                                    ].map((service) => (
                                        <label key={service} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value={service}
                                                checked={formData.services.includes(service)}
                                                onChange={(e) => handleCheckboxChange(e, 'services')}
                                                className="mr-2"
                                            />
                                            {service}
                                        </label>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="otherServices" className="block font-medium mb-2">
                                        Other Services
                                    </label>
                                    <input
                                        type="text"
                                        id="otherServices"
                                        name="otherServices"
                                        value={formData.otherServices}
                                        onChange={handleInputChange}
                                        className="w-full p-2 rounded-lg bg-gray-100"
                                        placeholder="Please specify other services"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium mb-2">Emergency Care Available (24/7)</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="emergencyAvailable"
                                            value="true"
                                            checked={formData.emergencyAvailable === true}
                                            onChange={(e) => setFormData(prev => ({
                                                ...prev,
                                                emergencyAvailable: e.target.value === "true"
                                            }))}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="emergencyAvailable"
                                            value="false"
                                            checked={formData.emergencyAvailable === false}
                                            onChange={(e) => setFormData(prev => ({
                                                ...prev,
                                                emergencyAvailable: e.target.value === "true"
                                            }))}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>

                            {formData.emergencyAvailable && (
                                <div>
                                    <label htmlFor="emergencyContact" className="block font-medium mb-2">
                                        Emergency Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="emergencyContact"
                                        name="emergencyContact"
                                        value={formData.emergencyContact}
                                        onChange={handleInputChange}
                                        className="w-full p-2 rounded-lg bg-gray-100"
                                        required
                                    />
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Add remaining sections in the next continuation */}

                    {/* Section 5: Staff Information */}
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Section 5: Staff Information</h2>
                        <hr className="mb-4" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="totalDoctors" className="block font-medium mb-2">
                                    Total Number of Doctors
                                </label>
                                <input
                                    type="number"
                                    id="totalDoctors"
                                    name="totalDoctors"
                                    value={formData.totalDoctors}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="specialists" className="block font-medium mb-2">
                                    Number of Specialists
                                </label>
                                <input
                                    type="number"
                                    id="specialists"
                                    name="specialists"
                                    value={formData.specialists}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="residentDoctors" className="block font-medium mb-2">
                                    Number of Resident Doctors
                                </label>
                                <input
                                    type="number"
                                    id="residentDoctors"
                                    name="residentDoctors"
                                    value={formData.residentDoctors}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="nurses" className="block font-medium mb-2">
                                    Number of Nurses
                                </label>
                                <input
                                    type="number"
                                    id="nurses"
                                    name="nurses"
                                    value={formData.nurses}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    required
                                />
                            </div>

                            {/* Key Specialist Information */}
                            <div className="md:col-span-2">
                                <h3 className="text-xl font-medium mb-4">Key Specialist Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="keySpecialistSpecialty" className="block font-medium mb-2">
                                            Specialty
                                        </label>
                                        <input
                                            type="text"
                                            id="keySpecialistSpecialty"
                                            name="keySpecialistSpecialty"
                                            value={formData.keySpecialistSpecialty}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg bg-gray-100"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="keySpecialistName" className="block font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="keySpecialistName"
                                            name="keySpecialistName"
                                            value={formData.keySpecialistName}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg bg-gray-100"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="keySpecialistQualification" className="block font-medium mb-2">
                                            Qualification
                                        </label>
                                        <input
                                            type="text"
                                            id="keySpecialistQualification"
                                            name="keySpecialistQualification"
                                            value={formData.keySpecialistQualification}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg bg-gray-100"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="keySpecialistContact" className="block font-medium mb-2">
                                            Contact Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="keySpecialistContact"
                                            name="keySpecialistContact"
                                            value={formData.keySpecialistContact}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg bg-gray-100"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="keySpecialistEmail" className="block font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="keySpecialistEmail"
                                            name="keySpecialistEmail"
                                            value={formData.keySpecialistEmail}
                                            onChange={handleInputChange}
                                            className="w-full p-2 rounded-lg bg-gray-100"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Infrastructure and Technology */}
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Section 6: Infrastructure and Technology</h2>
                        <hr className="mb-4" />
                        <div className="space-y-6">
                            <div>
                                <label className="block font-medium mb-2">
                                    Availability of Teleconsultation Technology
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="hasTeleconsultation"
                                            value="true"
                                            checked={formData.hasTeleconsultation === true}
                                            onChange={(e) => setFormData(prev => ({
                                                ...prev,
                                                hasTeleconsultation: e.target.value === "true"
                                            }))}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="hasTeleconsultation"
                                            value="false"
                                            checked={formData.hasTeleconsultation === false}
                                            onChange={(e) => setFormData(prev => ({
                                                ...prev,
                                                hasTeleconsultation: e.target.value === "true"
                                            }))}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>

                            {formData.hasTeleconsultation && (
                                <div>
                                    <label htmlFor="teleconsultationDetails" className="block font-medium mb-2">
                                        Details of Technology Used
                                    </label>
                                    <textarea
                                        id="teleconsultationDetails"
                                        name="teleconsultationDetails"
                                        value={formData.teleconsultationDetails}
                                        onChange={handleInputChange}
                                        className="w-full p-2 rounded-lg bg-gray-100"
                                        rows={3}
                                        required
                                    />
                                </div>
                            )}

                            <div>
                                <label htmlFor="diagnosticEquipment" className="block font-medium mb-2">
                                    Major Diagnostic Equipment
                                </label>
                                <textarea
                                    id="diagnosticEquipment"
                                    name="diagnosticEquipment"
                                    value={formData.diagnosticEquipment}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    rows={3}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="surgicalEquipment" className="block font-medium mb-2">
                                    Major Surgical Equipment
                                </label>
                                <textarea
                                    id="surgicalEquipment"
                                    name="surgicalEquipment"
                                    value={formData.surgicalEquipment}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    rows={3}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Compliance and Quality Assurance */}
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Section 7: Compliance and Quality Assurance</h2>
                        <hr className="mb-4" />
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium mb-2">ISO Certification</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="isoCertified"
                                                value="true"
                                                checked={formData.isoCertified === true}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    isoCertified: e.target.value === "true"
                                                }))}
                                                className="mr-2"
                                            />
                                            Yes
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="isoCertified"
                                                value="false"
                                                checked={formData.isoCertified === false}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    isoCertified: e.target.value === "true"
                                                }))}
                                                className="mr-2"
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium mb-2">NABH Accreditation</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="nabhAccredited"
                                                value="true"
                                                checked={formData.nabhAccredited === true}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    nabhAccredited: e.target.value === "true"
                                                }))}
                                                className="mr-2"
                                            />
                                            Yes
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="nabhAccredited"
                                                value="false"
                                                checked={formData.nabhAccredited === false}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    nabhAccredited: e.target.value === "true"
                                                }))}
                                                className="mr-2"
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="otherCertifications" className="block font-medium mb-2">
                                    Other Certifications
                                </label>
                                <textarea
                                    id="otherCertifications"
                                    name="otherCertifications"
                                    value={formData.otherCertifications}
                                    onChange={handleInputChange}
                                    className="w-full p-2 rounded-lg bg-gray-100"
                                    rows={3}
                                    placeholder="Please specify other certifications"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    Compliance with National/Regional Healthcare Standards
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="compliantWithStandards"
                                            value="true"
                                            checked={formData.compliantWithStandards === true}
                                            onChange={(e) => setFormData(prev => ({
                                                ...prev,
                                                compliantWithStandards: e.target.value === "true"
                                            }))}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="compliantWithStandards"
                                            value="false"
                                            checked={formData.compliantWithStandards === false}
                                            onChange={(e) => setFormData(prev => ({
                                                ...prev,
                                                compliantWithStandards: e.target.value === "true"
                                            }))}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>

                            {formData.compliantWithStandards && (
                                <div>
                                    <label htmlFor="complianceDetails" className="block font-medium mb-2">
                                        Compliance Details
                                    </label>
                                    <textarea
                                        id="complianceDetails"
                                        name="complianceDetails"
                                        value={formData.complianceDetails}
                                        onChange={handleInputChange}
                                        className="w-full p-2 rounded-lg bg-gray-100"
                                        rows={3}
                                        required
                                    />
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Section 8: Declaration and Undertaking */}
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Section 8: Declaration and Undertaking</h2>
                        <hr className="mb-4" />
                        <div className="space-y-6">
                            <p className="text-justify">
                                I, the undersigned, hereby declare that the information provided in this
                                application is true and correct to the best of my knowledge. I understand
                                that any false information may lead to disqualification from the empanelment
                                process. I agree to comply with all the terms and conditions set forth by
                                the G Care Project.
                            </p>

                            <div>
                                <label htmlFor="signature" className="block font-medium mb-2">
                                    Signature (Full Name)
                                </label>
                                <input
                                    type="text"
                                    id="signature"
                                    name="signature"
                                    value={formData.signature}
                                    onChange={handleInputChange}
                                    className="w-full lg:w-1/2 p-2 rounded-lg bg-gray-100"
                                    placeholder="Enter your full name as signature"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="date" className="block font-medium mb-2">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="w-full lg:w-1/2 p-2 rounded-lg bg-gray-100"
                                    required
                                    readOnly
                                />
                            </div>
                        </div>
                    </section>

                    {/* Section 9: Document Checklist */}
                </form>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default medInstForm;