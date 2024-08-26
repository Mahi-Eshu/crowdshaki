"use client";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const RaiseFundsForm = (data) => {
  const fundDetails = data.data;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    pincode: "",
    beneficiaryName: "",
    relationship: "",
    amountForFund: "",
    reasonForFund: "",
    accountHolder: "",
    accountNumber: "",
    accountType: "",
    ifscCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can add logic to send the form data to your backend
  };

  return (
    <main className="md:px-8 md:py-4 shadow-xl md:border-2 md:border-gray-200">
      <form onSubmit={handleSubmit}>
        <h1 className="m-2 my-12 text-2xl font-medium">
          1. Campaigner Details
        </h1>
        <div className="m-2 flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
            <div>
              <label htmlFor="firstName" className="block font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
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
                onChange={handleChange}
                required
                className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block font-medium mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
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
              onChange={handleChange}
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
                type="text"
                name="pincode"
                id="pincode"
                placeholder="Enter your pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                maxLength={6}
                className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
              />
            </div>
          </div>
          <h1 className="my-12 text-2xl font-medium">2. Beneficiary Details</h1>
          <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="beneficiaryName" className="block font-medium mb-2">
                  Beneficiary Name
                </label>
                <input
                  type="text"
                  name="beneficiaryName"
                  id="beneficiaryName"
                  placeholder="Enter beneficiary name"
                  value={formData.beneficiaryName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="relationship" className="block font-medium mb-2">
                  Relationship
                </label>
                <input
                  type="text"
                  name="relationship"
                  id="relationship"
                  placeholder="Enter your relationship with beneficiary"
                  value={formData.relationship}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="amountForFund" className="block font-medium mb-2">
                  Amount For Fund
                </label>
                <input
                  type="text"
                  name="amountForFund"
                  id="amountForFund"
                  placeholder="Enter the amount for fund raising"
                  value={formData.amountForFund}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="reasonForFund" className="block font-medium mb-2">
                  Reason For Fund
                </label>
                <input
                  type="text"
                  name="reasonForFund"
                  id="reasonForFund"
                  placeholder="Enter the reason for the fund raising"
                  value={formData.reasonForFund}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
          </div>

          <h1 className="my-12 text-2xl font-medium">3. Account Details</h1>
          <div className=" flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="accountHolder" className="block font-medium mb-2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  name="accountHolder"
                  id="accountHolder"
                  placeholder="Enter account holder name"
                  value={formData.accountHolder}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="accountNumber" className="block font-medium mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  id="accountNumber"
                  placeholder="Enter the account number"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
              <div>
                <label htmlFor="accountType" className="block font-medium mb-2">
                  Account Type
                </label>
                <input
                  type="text"
                  name="accountType"
                  id="accountType"
                  placeholder="Enter the account type"
                  value={formData.accountType}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="ifscCode" className="block font-medium mb-2">
                  IFSC Code
                </label>
                <input
                  type="text"
                  name="ifscCode"
                  id="ifscCode"
                  placeholder="Enter the IFSC code"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  className="w-full p-2 rounded-xl lg:w-[400px] bg-gray-100"
                />
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
    </main>
  );
};

export default RaiseFundsForm;
