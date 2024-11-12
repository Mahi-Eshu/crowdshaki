"use server"

import { NextRequest } from "next/server"

export const doctorDetails = async(formdata: FormData) => {
    console.log("formdata:", formdata)
    
    const labName = formdata.get("labName")
    const ownerName = formdata.get("ownerName")
    const email = formdata.get("email")
    const mobile = formdata.get("mobile")
    const address = formdata.get("address")
    const pincode = formdata.get("pincode")
    const labType = formdata.get("labType")
    const yearsOfOperation = formdata.get("yearsOfOperation")
    const labLicenseNumber = formdata.get("labLicenseNumber")
    const dateOfIssue = formdata.get("dateOfIssue")
    const issuingAuthority = formdata.get("issuingAuthority")
    const pathologistCount = formdata.get("pathologistCount")
    const technicianCount = formdata.get("technicianCount")
    const compliantOrnot = formdata.get("compliantOrnot")

    const res = await fetch("https://crowdshaki.vercel.app/api/doctors", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            labName,
            ownerName,
            email,
            mobile,
            address,
            pincode,
            labType,
            yearsOfOperation,
            labLicenseNumber,
            dateOfIssue,
            issuingAuthority,
            pathologistCount,
            technicianCount,
            compliantOrnot,
        })
    })

    const data = res.json()
    console.log(data)
    return data
}