"use server"

import { NextRequest } from "next/server"

export const raiseFundDetails = async(formdata: FormData, userId: string|null) => {
    console.log(formdata)
    
    const firstName = formdata.get("firstName")
    const lastName = formdata.get("lastName")
    const email = formdata.get("email")
    const mobile = formdata.get("mobile")
    const address = formdata.get("address")
    const pincode = formdata.get("pincode")
    const beneficiaryName = formdata.get("beneficiaryName")
    const relationship = formdata.get("relationship")
    const amountForFund = formdata.get("amountForFund")
    const reasonForFund = formdata.get("reasonForFund")
    const situation = formdata.get("situation")
    const category = formdata.get("category")
    const accountNumber = formdata.get("accountNumber")
    const accountHolder = formdata.get("accountHolder")
    const accountType = formdata.get("accountType")
    const ifscCode = formdata.get("ifscCode")

    console.log(userId);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/raiseFunds`, {  
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            mobile,
            address,
            pincode,
            beneficiaryName,
            relationship,
            amountForFund,
            reasonForFund,
            situation,
            category,
            accountHolder,
            accountNumber,
            accountType,
            ifscCode,
            userId
        })
    })
    
    const data = await res.json()
    console.log(data)
    return data
}