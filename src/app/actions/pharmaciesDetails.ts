"use server"

import { NextRequest } from "next/server"

export const pharmaciesDetails = async(formdata: FormData) => {
    console.log("formdata:", formdata)
    
    const pharmacyName = formdata.get("pharmacyName")
    const email = formdata.get("email")
    const mobile = formdata.get("mobile")
    const address = formdata.get("address")
    const pincode = formdata.get("pincode")
    const pharmacyType = formdata.get("pharmacyType")
    const yearsOfOperation = formdata.get("yearsOfOperation")
    const labLicenseNumber = formdata.get("labLicenseNumber")
    const dateOfIssue = formdata.get("dateOfIssue")
    const issuingAuthority = formdata.get("issuingAuthority")
    const compliantOrnot = formdata.get("compliantOrnot")

    const res = await fetch("https://crowdshaki.vercel.app/api/pharmacies", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pharmacyName,
            email,
            mobile,
            address,
            pincode,
            pharmacyType,
            yearsOfOperation,
            labLicenseNumber,
            dateOfIssue,
            issuingAuthority,
            compliantOrnot,
        })
    })

    const data = res.json()
    console.log(data)
    return data
}