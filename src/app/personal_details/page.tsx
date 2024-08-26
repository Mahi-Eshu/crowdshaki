import React from 'react'
import Navbar from '../components/Navbar'
import UserDetailsForm from '../components/UserDetailsForm';
const page = () => {

  const user = null;
  return (
    <div>
      <Navbar></Navbar>
      <div className='p-4 md:flex md:flex-row md:justify-center md:items-center'>
        <UserDetailsForm user={user}/>
      </div>
    </div>
  )
}

export default page