"use client";

import React, { useState } from "react";
import { personalDetails } from "../actions/personalDetails";
import { toast } from "react-toastify";
import Link from "next/link";

const UserDetailsForm = (data: any) => {
  const userDetails = data.data;

  // var countries = {
  //   cUrl: "https://api.countrystatecity.in/v1/countries",
  //   cKey: "elhaUzhkMEIyUXJvSjVyZW9QRmp5YXBGWjVKd2lqV0h6VFRLS3B5eQ==",
  // };


  const [formValues, setFormValues] = useState({
    firstName: userDetails?.firstName || "",
    lastName: userDetails?.lastName || "",
    email: userDetails?.email || "",
    mobile: userDetails?.mobile || "",
    street: userDetails?.street || "",
    city: userDetails?.city || "",
    district: userDetails?.district || "",
    state: userDetails?.state || "",
    pincode: userDetails?.pincode || "",
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
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
            <div>
              <label htmlFor="firstName" className="block font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name.."
                value={formValues.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
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
                placeholder="Enter your last name.."
                value={formValues.lastName}
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
        <h1 className="m-2 mt-4 text-2xl font-medium">Address</h1>
        <div className="m-2 flex flex-col gap-4">
          <div>
            <label htmlFor="street" className="block font-medium">
              Street Name
            </label>
            <input
              type="text"
              name="street"
              id="street"
              placeholder="Enter your street name.."
              value={formValues.street}
              onChange={handleInputChange}
              required
              className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[765px]"
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
                value={formValues.city}
                placeholder="Enter your city.."
                onChange={handleInputChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
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
                value={formValues.district}
                placeholder="Enter your district.."
                onChange={handleInputChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
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
                placeholder="Enter your state.."
                onChange={handleInputChange}
                required
                className="w-full p-2 border-2 border-gray-500 rounded-sm lg:w-[300px]"
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
          <input
            type="submit"
            className="w-full p-4 bg-black text-white rounded-sm my-10 lg:w-[200px] hover:scale-105 hover:cursor-pointer duration-300"
            value="Save"
          />
        </div>
      </form>
    </>
  );
};

export default React.memo(UserDetailsForm);
