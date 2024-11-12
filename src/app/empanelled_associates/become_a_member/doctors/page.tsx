"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { doctorDetails } from "../../../actions/doctorDetails";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const labForm = () => {
  const [formData, setFormData] = useState({
    //labname
    labName: "",

    //contact details
    ownerName: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",

    //lab details
    labType: "",
    yearsOfOperation: "",

    //lab license & accreditation
    labLicenseNumber: "",
    dateOfIssue: "",
    issuingAuthority: "",

    //services provided
    serviceTypes: "",
    specialTests: "",
    facilities: "",

    //staffs
    pathologistCount: "",
    technicianCount: "",

    //compliance
    compliantOrnot: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
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
      <Navbar></Navbar>
      <h1 className="font-semibold text-[24px] my-8 lg:text-[28px] xl:text-[34px] leading-tight text-black text-center md:text-center">
        Fill the form! Become a Member!
      </h1>
      <div className="p-4 md:flex md:flex-row md:justify-center md:items-center">
        <form onSubmit={handleSubmit}>
          {/* labname */}
          <h1 className="m-2 my-12 text-2xl font-medium">1. Lab Details</h1>
          <div className="m-2 flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="labName" className="block font-medium mb-2">
                  Lab Name
                </label>
                <input
                  type="text"
                  name="labName"
                  id="labName"
                  placeholder="Enter your Lab name"
                  value={formData.labName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
          </div>
          {/* contact details */}
          <h1 className="m-2 my-12 text-2xl font-medium">2. Contact Details</h1>
          <div className="m-2 flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="ownerName" className="block font-medium mb-2">
                  Owner Name
                </label>
                <input
                  type="text"
                  name="ownerName"
                  id="ownerName"
                  placeholder="Enter your first name"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  maxLength={10}
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
          </div>
          <div className="m-2 flex flex-col gap-4">
            <div>
              <label htmlFor="address" className="block font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
              />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="pincode" className="block font-medium mb-2">
                  Pincode
                </label>
                <input
                  type="number"
                  name="pincode"
                  id="pincode"
                  placeholder="Enter your pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  maxLength={6}
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
            {/* lab details */}
            <h1 className="my-12 text-2xl font-medium">3. Lab Details</h1>
            <div className=" flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
                <div>
                  <label htmlFor="labType" className="block font-medium mb-2">
                    Lab type
                  </label>
                  <select
                    name="labType"
                    id="labType"
                    value={formData.labType}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                  >
                    <option value="" disabled>
                      Select your choice
                    </option>
                    <option value="clinical_pathology">
                      Clinical Pathology
                    </option>
                    <option value="bicroBiology">MicroBiology</option>
                    <option value="biochemistry">Biochemistry</option>
                    <option value="hematology">Hematology</option>
                    <option value="immunology">Immunology</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="genetics">Genetics</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="yearsOfOperation"
                    className="block font-medium mb-2"
                  >
                    Years of Operation
                  </label>
                  <input
                    type="number"
                    name="yearsOfOperation"
                    id="yearsOfOperation"
                    placeholder="Enter the years of operation"
                    value={formData.yearsOfOperation}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                  />
                </div>
              </div>
            </div>
            <h1 className="m-2 my-12 text-2xl font-medium">
              4. Lab License & Accreditation
            </h1>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label
                  htmlFor="labLicenseNumber"
                  className="block font-medium mb-2"
                >
                  Lab License Number
                </label>
                <input
                  type="number"
                  name="labLicenseNumber"
                  id="labLicenseNumber"
                  placeholder="Enter the license number"
                  value={formData.labLicenseNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="dateOfIssue" className="block font-medium mb-2">
                  Date of Issue
                </label>
                <input
                  type="text"
                  name="dateOfIssue"
                  id="dateOfIssue"
                  placeholder="dd/mm/yyyy"
                  value={formData.dateOfIssue}
                  onChange={handleInputChange}
                  required
                  pattern="\d{2}/\d{2}/\d{4}"
                  title="Enter the License Issue date"
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label
                  htmlFor="issuingAuthority"
                  className="block font-medium mb-2"
                >
                  Issuing Authority
                </label>
                <input
                  type="text"
                  name="issuingAuthority"
                  id="issuingAuthority"
                  placeholder="Enter the Issuing Authority Name"
                  value={formData.issuingAuthority}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
            {/* 3 dropdowns - services provided */}
            <h1 className="my-12 text-2xl font-medium">5. Services Provided</h1>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40 mb-8">
              {/* serviceTypes */}
              <div>
                <label
                  htmlFor="serviceTypes"
                  className="block font-medium mb-2"
                >
                  Service Type
                </label>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Routine Blood Tests"
                      className="mr-2"
                    />
                    Routine Blood Tests
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Urine Analysis"
                      className="mr-2"
                    />
                    Urine Analysis
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Pathogen Identification"
                      className="mr-2"
                    />
                    Pathogen Identification
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Genetic Testing"
                      className="mr-2"
                    />
                    Genetic Testing
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Histopathology"
                      className="mr-2"
                    />
                    Histopathology
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Cytology"
                      className="mr-2"
                    />
                    Cytology
                  </label>
                </div>
              </div>

              {/* specialTests */}
              <div>
                <label
                  htmlFor="serviceTypes"
                  className="block font-medium mb-2"
                >
                  Special Tests
                </label>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="specialTests"
                      value="Allergy Testing"
                      className="mr-2"
                    />
                    Allergy Testing
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="specialTests"
                      value="Cancer Marker Testing"
                      className="mr-2"
                    />
                    Cancer Marker Testing
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="specialTests"
                      value="Infectious Disease Testing"
                      className="mr-2"
                    />
                    Infectious Disease Testing
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="specialTests"
                      value="Hormone Testing"
                      className="mr-2"
                    />
                    Hormone Testing
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="specialTests"
                      value="Toxicology Testing"
                      className="mr-2"
                    />
                    Toxicology Testing
                  </label>
                </div>
              </div>
            </div>
            {/* facilities */}
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="facilities" className="block font-medium mb-2">
                  Facilities
                </label>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Automated Testing Equipment"
                      className="mr-2"
                    />
                    Automated Testing Equipment
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Refrigerated Storage for Samples"
                      className="mr-2"
                    />
                    Refrigerated Storage for Samples
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Biohazardous Waste Disposal System"
                      className="mr-2"
                    />
                    Biohazardous Waste Disposal System
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="serviceTypes"
                      value="Dedicated Waiting Area for Patients"
                      className="mr-2"
                    />
                    Dedicated Waiting Area for Patients
                  </label>
                </div>
              </div>
            </div>
            <h1 className="my-12 text-2xl font-medium">6. Man Power</h1>
            <div className=" flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
                <div>
                  <label
                    htmlFor="pathologistCount"
                    className="block font-medium mb-2"
                  >
                    Pathologist Count
                  </label>
                  <input
                    type="number"
                    name="pathologistCount"
                    id="pathologistCount"
                    placeholder="Enter Patholoogist Count"
                    value={formData.pathologistCount}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="accountNumber"
                    className="block font-medium mb-2"
                  >
                    Account Number
                  </label>
                  <input
                    type="number"
                    name="technicianCount"
                    id="technicianCount"
                    placeholder="Enter Technician Count"
                    value={formData.technicianCount}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
                <div>
                  <label
                    htmlFor="compliantOrnot"
                    className="block font-medium mb-2"
                  >
                    Are you Compliant to Government Regulations or not?
                  </label>
                  <select
                    name="compliantOrnot"
                    id="compliantOrnot"
                    value={formData.compliantOrnot}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                  >
                    <option value="" disabled>
                      Select your choice
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-[200px] p-4 bg-black text-white rounded-sm my-10 lg:w-[400px]"
            >
              Submit
            </button>
             
          </div>
        </form>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default labForm;
