"use client";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { gpaDetails } from "@/app/actions/gpaDetails";

const today = new Date().toISOString().split("T")[0]; // Generate today's date in YYYY-MM-DD format

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  residentialAddress: string;
  clinicAddress: string;
  dob: string;

  medicalRegNumber: string;
  medicalCouncil: string;
  dateOfReg: string;
  qualification: string;
  institution: string;
  yearOfPassing: string;
  totalExperience: string;
  gpExperience: string;

  hospitalName: string;
  designation: string;
  affiliations: string;
  teleconsultationExperience: boolean;
  teleconsultationDetails: string;

  preferredDays: string[];
  preferredTimeSlots: string[];

  hasComputer: boolean;
  hasInternet: boolean;
  platformUsed: string;

  certifications: string;
  compliantWithGuidelines: boolean;

  signature: string;
  date: string; // or Date depending on how you manage 'today'
}


const GeneralPhysicianForm = () => {
  const [formData, setFormData] = useState<FormData>({
    // Personal Information
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    residentialAddress: "",
    clinicAddress: "",
    dob: "",

    // Professional Information
    medicalRegNumber: "",
    medicalCouncil: "",
    dateOfReg: "",
    qualification: "",
    institution: "",
    yearOfPassing: "",
    totalExperience: "",
    gpExperience: "",

    // Practice Details
    hospitalName: "",
    designation: "",
    affiliations: "",
    teleconsultationExperience: false,
    teleconsultationDetails: "",

    // Availability
    preferredDays: [],
    preferredTimeSlots: [],

    // Technology
    hasComputer: false,
    hasInternet: false,
    platformUsed: "",

    // Compliance
    certifications: "",
    compliantWithGuidelines: false,

    //Declaration
    signature: "",
    date: today
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

    await gpaDetails(data);
};

  return (
    <main className="md:px-8 md:py-4 shadow-xl md:border-2 md:border-gray-200">
      <Navbar />
      <h1 className="font-semibold text-3xl my-8 text-center">
        General Physician Application Form
      </h1>
      <div className="p-4 lg:max-w-[1000px] xl:lg:max-w-[1200px] mx-auto">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section 1: Personal Information */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Section 1: Personal Information</h2>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block font-medium mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="residentialAddress" className="block font-medium mb-2">Residential Address</label>
                <textarea
                  name="residentialAddress"
                  id="residentialAddress"
                  value={formData.residentialAddress}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label htmlFor="clinicAddress" className="block font-medium mb-2">Clinic/Hospital Address</label>
                <textarea
                  name="clinicAddress"
                  id="clinicAddress"
                  value={formData.clinicAddress}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  rows={3}
                  required
                />
              </div>
              <div>
                <label htmlFor="dob" className="block font-medium mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
            </div>
          </section>

          {/* Section 2: Professional Information */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Section 2: Professional Information</h2>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="medicalRegNumber" className="block font-medium mb-2">Medical Registration Number</label>
                <input
                  type="text"
                  name="medicalRegNumber"
                  id="medicalRegNumber"
                  value={formData.medicalRegNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="medicalCouncil" className="block font-medium mb-2">State/National Medical Council</label>
                <input
                  type="text"
                  name="medicalCouncil"
                  id="medicalCouncil"
                  value={formData.medicalCouncil}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="dateOfReg" className="block font-medium mb-2">Date of Registration</label>
                <input
                  type="date"
                  name="dateOfReg"
                  id="dateOfReg"
                  value={formData.dateOfReg}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="qualification" className="block font-medium mb-2">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="institution" className="block font-medium mb-2">Institution</label>
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="yearOfPassing" className="block font-medium mb-2">Year of Passing</label>
                <input
                  type="number"
                  name="yearOfPassing"
                  id="yearOfPassing"
                  value={formData.yearOfPassing}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="totalExperience" className="block font-medium mb-2">Total Years of Experience</label>
                <input
                  type="number"
                  name="totalExperience"
                  id="totalExperience"
                  value={formData.totalExperience}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="gpExperience" className="block font-medium mb-2">Years of Experience as GP</label>
                <input
                  type="number"
                  name="gpExperience"
                  id="gpExperience"
                  value={formData.gpExperience}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
            </div>
          </section>

          {/* Add further sections as required based on the PDF */}

          {/* Section 3: Professional Practice */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Section 3: Professional Practice</h2>
            <hr className="mb-4" />
            <div className="space-y-4">
              <div>
                <label htmlFor="hospitalName" className="block font-medium mb-2">Clinic/Hospital Name</label>
                <input
                  type="text"
                  name="hospitalName"
                  id="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleInputChange}
                  className="w-full lg:w-1/2 p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="designation" className="block font-medium mb-2">Designation</label>
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full lg:w-1/2 p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="affiliations" className="block font-medium mb-2">
                  Professional Affiliations (e.g., Medical Associations)
                </label>
                <textarea
                  name="affiliations"
                  id="affiliations"
                  value={formData.affiliations}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  rows={3}
                />
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Previous Teleconsultation Experience
                </label>
                <div className="flex gap-4">
                  <label htmlFor="teleconsultationExperienceYes" className="flex items-center">
                    <input
                      type="radio"
                      name="teleconsultationExperience"
                      id="teleconsultationExperienceYes"
                      value="true"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          teleconsultationExperience: e.target.value === "true",
                        }));
                      }}
                      checked={formData.teleconsultationExperience === true}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label htmlFor="teleconsultationExperienceNo" className="flex items-center">
                    <input
                      type="radio"
                      name="teleconsultationExperience"
                      id="teleconsultationExperienceNo"
                      value="false"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          teleconsultationExperience: e.target.value === "true",
                        }));
                      }}
                      checked={formData.teleconsultationExperience === false}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              {formData.teleconsultationExperience && (
                <div className="col-span-2">
                  <label htmlFor="teleconsultationDetails" className="block font-medium mb-2">
                    If Yes, provide details
                  </label>
                  <textarea
                    name="teleconsultationDetails"
                    id="teleconsultationDetails"
                    value={formData.teleconsultationDetails}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-lg bg-gray-100"
                    rows={3}
                  />
                </div>
              )}

            </div>
          </section>

          {/* Section 4: Availability for Teleconsultation */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Section 4: Availability for Teleconsultation</h2>
            <hr className="mb-4" />
            <div>
              <label className="block font-medium mb-2">Preferred Days</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                  (day:any) => (
                    <label key={day} className="flex items-center">
                      <input
                        type="checkbox"
                        name="preferredDays"
                        value={day}
                        onChange={(e) => {
                          const value = e.target.value;
                          setFormData((prev: any) => ({
                            ...prev,
                            preferredDays: prev.preferredDays.includes(value)
                              ? prev.preferredDays.filter((d: any) => d !== value)
                              : [...prev.preferredDays, value],
                          }));
                        }}
                        checked={formData.preferredDays.includes(day)}
                        className="mr-2"
                      />
                      {day}
                    </label>
                  )
                )}
              </div>
            </div>
            <div className="mt-6">
              <label className="block font-medium mb-2">Preferred Time Slots</label>
              <div className="flex gap-4">
                {["Morning", "Afternoon", "Evening"].map((slot: any) => (
                  <label key={slot} className="flex items-center">
                    <input
                      type="checkbox"
                      name="preferredTimeSlots"
                      value={slot}
                      onChange={(e) => {
                        const value = e.target.value;
                        setFormData((prev: any) => ({
                          ...prev,
                          preferredTimeSlots: prev.preferredTimeSlots.includes(value)
                            ? prev.preferredTimeSlots.filter((s: any) => s !== value)
                            : [...prev.preferredTimeSlots, value],
                        }));
                      }}
                      checked={formData.preferredTimeSlots.includes(slot)}
                      className="mr-2"
                    />
                    {slot}
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: Infrastructure and Technology */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Section 5: Infrastructure and Technology</h2>
            <hr className="mb-4" />
            <div className="space-y-4">
              {/* Availability of Computer/Smartphone */}
              <div>
                <label className="block font-medium mb-2">Availability of Computer/Smartphone</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasComputer"
                      value="true"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          hasComputer: e.target.value === "true",
                        }));
                      }}
                      checked={formData.hasComputer === true}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasComputer"
                      value="false"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          hasComputer: e.target.value === "true",
                        }));
                      }}
                      checked={formData.hasComputer === false}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Availability of Reliable Internet */}
              <div>
                <label className="block font-medium mb-2">Reliable Internet Connection</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasInternet"
                      value="true"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          hasInternet: e.target.value === "true",
                        }));
                      }}
                      checked={formData.hasInternet === true}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasInternet"
                      value="false"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          hasInternet: e.target.value === "true",
                        }));
                      }}
                      checked={formData.hasInternet === false}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Teleconsultation Platform */}
              <div className="col-span-2">
                <label className="block font-medium mb-2">Teleconsultation Platform Used (if any)</label>
                <input
                  type="text"
                  name="platformUsed"
                  value={formData.platformUsed}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  placeholder="Enter platform name"
                />
              </div>
            </div>
          </section>

          {/* Section 6: Compliance and Certification */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Section 6: Compliance and Certification</h2>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Certifications */}
              <div className="col-span-2">
                <label className="block font-medium mb-2">Any Additional Certifications (Telemedicine, etc.)</label>
                <textarea
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-lg bg-gray-100"
                  rows={3}
                  placeholder="List your certifications here"
                />
              </div>

              {/* Compliance with Guidelines */}
              <div>
                <label className="block font-medium mb-2">Compliance with National Telemedicine Guidelines</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="compliantWithGuidelines"
                      value="true"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          compliantWithGuidelines: e.target.value === "true",
                        }));
                      }}
                      checked={formData.compliantWithGuidelines === true}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="compliantWithGuidelines"
                      value="false"
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          compliantWithGuidelines: e.target.value === "true",
                        }));
                      }}
                      checked={formData.compliantWithGuidelines === false}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Declaration and Undertaking */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Section 7: Declaration and Undertaking</h2>
            <hr className="mb-4" />
            <div className="space-y-6">
              <p className="text-justify">
                I, the undersigned, hereby declare that the information provided in this
                application is true and correct to the best of my knowledge. I understand
                that any false information may lead to disqualification from the empanelment process. I agree to comply with all the terms and conditions
                set forth by the G Care Project.
              </p>
              <div>
                <label htmlFor="signature" className="block font-medium mb-2">
                  Signature
                </label>
                <input
                  type="text"
                  name="signature"
                  id="signature"
                  value={formData.signature || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your full name as signature"
                  className="w-full lg:w-1/2 p-2 rounded-lg bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block font-medium mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date || ""}
                  onChange={handleInputChange}
                  className="w-full lg:w-1/2 p-2 rounded-lg bg-gray-100"
                  required
                  readOnly
                />
              </div>
            </div>
          </section>

          {/* Section 8: Checklist of Documents to be Attached */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Section 8: Checklist of Documents to be Attached</h2>
            <hr className="mb-4" />
            <div className="space-y-4">
              <p>Please upload the following documents as required:</p>
              <div className="space-y-2">
                {[
                  "Copy of Medical Registration Certificate",
                  "Copies of Qualification Certificates",
                  "Proof of Experience (Letter of Employment, Practice License, etc.)",
                  "Any Additional Certifications (Telemedicine, etc.)",
                  "Any other relevant documents",
                ].map((doc, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="file"
                      id="files"
                      name={`document_${index}`}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setFormData((prev) => ({
                          ...prev,
                          [`document_${index}`]: file || null,
                        }));
                      }}
                      className="mr-4"
                    />
                    <label htmlFor="files" className="block font-medium">{doc}</label>
                  </div>
                ))}
              </div>
            </div>
          </section>


          <button
            type="submit"
            className="w-full md:w-1/2 p-3 bg-blue-600 text-white rounded-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default GeneralPhysicianForm;
