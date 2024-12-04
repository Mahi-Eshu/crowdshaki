import React from 'react'
import Navbar from '@/app/components/Navbar';

const getData = async () => {
    const res = await fetch(
        'https://crowdshaki.vercel.app/api/pharmacies',
        { cache: "no-store" }
    );
    if (!res.ok) {
        throw new Error("Something Went Wrong");
    }
    console.log(res);
    return res.json();
};

const page = async () => {
    const pharmacies = await getData();
    return (
        <div>
            <Navbar></Navbar>
            <div className='p-4 lg:p-8 space-y-6'>
                <h1 className='text-3xl font-semibold text-center'>Pharmacies</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                    {/* {
                        pharmacies.map((doctor: any, index: any) => (
                            <div className='text-black p-2 lg:p-8' key={index}>
                                <div className='p-6 shadow-lg rounded-lg space-y-2'>
                                    <h1><span className='font-semibold'>Doctor Name: </span>{doctor['pharmacyName']}</h1>
                                    <p><span className='font-semibold'>Contact: </span>{doctor.mobile}</p>
                                </div>
                            </div>
                        ))
                    } */}
                    ZERO
                </div>
            </div>
        </div>
    )
}

export default page
