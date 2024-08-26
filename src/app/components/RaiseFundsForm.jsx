"use client";
import React, { useState } from "react";

const RaiseFundsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    street: "",
    city: "",
    district: "",
    state: "",
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
    <form onSubmit={handleSubmit}>
      <h1 className="m-2 mt-12 text-2xl font-medium">Campaigner Details</h1>
      <div className="m-2 flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
          <div>
            <label htmlFor="firstName" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
          <div>
            <label htmlFor="email" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="m-2 flex flex-col gap-4">
        <div>
          <label htmlFor="street" className="block font-medium">
            Street Name
          </label>
          <input
            type="text"
            name="street"
            id="street"
            placeholder="Enter your street name"
            value={formData.street}
            onChange={handleChange}
            required
            className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[965px]"
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
          <div>
            <label htmlFor="city" className="block font-medium">
              City / Town
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter your city name"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
          <div>
            <label htmlFor="district" className="block font-medium">
              District
            </label>
            <input
              type="text"
              name="district"
              id="district"
              placeholder="Enter your district name"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
          <div>
            <label htmlFor="state" className="block font-medium">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Enter your state name"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
          <div>
            <label htmlFor="pincode" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
        </div>
        <h1 className="mt-12 text-2xl font-medium">Beneficiary Details</h1>
        <div className=" flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
          <div>
            <label htmlFor="beneficiaryName" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
          <div>
            <label htmlFor="relationship" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
          <div>
            <label htmlFor="amountForFund" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
          <div>
            <label htmlFor="reasonForFund" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
        </div>
      </div>

      <h1 className="mt-12 text-2xl font-medium">Account Details</h1>
        <div className=" flex flex-col gap-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
          <div>
            <label htmlFor="accountHolder" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
          <div>
            <label htmlFor="accountNumber" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
          <div>
            <label htmlFor="accountType" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
          <div>
            <label htmlFor="ifscCode" className="block font-medium">
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
              className="w-full p-2 border-b-2 border-gray-500 rounded-sm lg:w-[400px]"
            />
          </div>
        </div>
      </div>
        <button
          type="submit"
          className="w-full p-4 bg-black text-white rounded-sm my-10 lg:w-[400px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RaiseFundsForm;
