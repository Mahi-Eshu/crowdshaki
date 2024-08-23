"use client";

import React, { useState } from "react";
import { personalDetails } from "../actions/personalDetails";
import { toast } from "react-toastify";
import Link from "next/link";

const UserDetailsForm = (data: any) => {
  const userDetails = data.data;

  const [formValues, setFormValues] = useState({
    campaignerName: userDetails?.campaignerName || "",
    email: userDetails?.email || "",
    mobile: userDetails?.mobile || "",
    address: userDetails?.address || "",
    pincode: userDetails?.pincode || "",
    beneficiaryName: userDetails?.beneficiaryName || "",
    relationship: userDetails?.relationship || "",
    amount: userDetails?.amount || "",
    reason: userDetails?.reason || "",
    necessaryDocuments: userDetails?.necessaryDocuments || "",
    accountNumber: userDetails?.accountNumber || "",
    ifscCode: userDetails?.ifscCode || "",
    holderName: userDetails?.holderName || "",
    accountType: userDetails?.accountType || "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <>
      <form
        action={async (formData) => {
          const data = await personalDetails(formData);
          if (
            (data.status === 200 || data.status === 409) &&
            formValues.pincode.length === 6
          ) {
            toast.success("Updated Successfully", {
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
          if (formValues.pincode.length > 6 || formValues.pincode.length < 6) {
            toast.error("Pincode must be 6 digits", {
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
        }}
      >
        <div className="m-2 flex flex-col gap-4">
          <h1 className="m-2 mt-4 text-2xl font-medium">Campaigner Details</h1>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
            <div>
              <label htmlFor="campaignerName" className="block font-medium">
                Campaigner Name
              </label>
              <input
                type="text"
                name="campaignerName"
                id="campaignerName"
                placeholder="Enter Campaigner Name.."
                value={formValues.campaignerName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
            <div>
              <label htmlFor="mailid" className="block font-medium">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your e-mail Id.."
                value={formValues.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
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
                placeholder="Enter your mobile number.."
                value={formValues.mobile}
                onChange={handleInputChange}
                required
                maxLength={10}
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
              />
            </div>
          </div>
        </div>
        <div className="m-2 flex flex-col gap-4">
          <h1 className="m-2 mt-4 text-2xl font-medium">Address</h1>
          <div>
            <label htmlFor="address" className="block font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your street name.."
              value={formValues.address}
              onChange={handleInputChange}
              required
              className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[765px]"
            />
          </div>
          <div>
            <label htmlFor="pincode" className="block font-medium">
              Pincode
            </label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              placeholder="Enter your pincode.."
              value={formValues.pincode}
              onChange={handleInputChange}
              required
              pattern="\d{6}"
              maxLength={6}
              className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
            />
          </div>
        </div>
        <div className="m-2 flex flex-col gap-4">
          <h1 className="m-2 mt-4 text-2xl font-medium">Beneficiary Details</h1>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
            <div>
              <label htmlFor="beneficiaryName" className="block font-medium">
                Beneficiary Name
              </label>
              <input
                type="text"
                name="beneficiaryName"
                id="beneficiaryName"
                placeholder="Enter Beneficiary Name.."
                value={formValues.beneficiaryName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
              />
            </div>
          </div>
          <div>
              <label htmlFor="reason" className="block font-medium">
                Reason for Fund
              </label>
              <input
                type="textarea"
                name="reason"
                id="reason"
                placeholder="Enter your reason.."
                value={formValues.reason}
                onChange={handleInputChange}
                required
                maxLength={10}
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
              />
            </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
            <div>
              <label htmlFor="relationship" className="block font-medium">
                Relationship
              </label>
              <select
                name="relationship"
                id="relationship"
                value={formValues.relationship}
                onChange={handleInputChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
              >
                <option value="">Select relationship...</option>
                <option value="spouse">Spouse</option>
                <option value="parent">Parent</option>
                <option value="child">Son</option>
                <option value="child">Daughter</option>
                <option value="sibling">Sibling</option>
                <option value="friend">Friend</option>
                <option value="colleague">Colleague</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="amount" className="block font-medium">
                Amount
              </label>
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Enter your amount.."
                value={formValues.amount}
                onChange={handleInputChange}
                required
                maxLength={10}
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          className="w-full p-4 bg-black text-white rounded-sm my-10 lg:w-[200px] hover:scale-105 hover:cursor-pointer duration-300"
          value="Save"
        />
      </form>
    </>
  );
};

export default React.memo(UserDetailsForm);
