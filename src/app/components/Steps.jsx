import React from 'react'

const Steps = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-medium'>Start a fundraiser</h1>
      <ul className='list-disc flex flex-col gap-4 py-4'>
        <div className='flex flex-col gap-2 ml-4'>
            <li className='text-xl font-medium '>Start your fundraiser</li>
            <p className='text-justify'>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</p>
        </div>
        <div className='flex flex-col gap-2 ml-4'>
            <li className='text-xl font-medium'>Share your fundraiser</li>
            <p className='text-justify'>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
        </div>
        <div className='flex flex-col gap-2 ml-4'>
            <li className='text-xl font-medium'>Withdraw Funds</li>
            <p className='text-justify'>The funds raised can be withdrawn without any hassle directly to your bank account.</p>
        </div>
      </ul>
    </div>
  )
}

export default Steps
