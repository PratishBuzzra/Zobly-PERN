import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='min-h-screen flex justify-center items-center py-20'>
     <div className='w-full p-8 max-w-md'>
      <h1 className='text-2xl mb-4 text-center'>Create a New Account</h1>
      <form className='space-y-4'>
        <div>
          <label htmlFor='role' className='block text-sm font-medium'>Register As</label>
          <select className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'>
            <option value="">Select Role</option>
            <option>Employer</option>
            <option>Job Seeker</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className='block text-sm font-medium'>Name</label>
          <input type="text" placeholder='Enter Your Name' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
        <div>
          <label htmlFor="email" className='block text-sm font-medium'>Email</label>
          <input type="text" placeholder='Enter Your Email' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
        <div>
          <label htmlFor="phone" className='block text-sm font-medium'>Phone Number</label>
          <input type="text" placeholder='Enter Your phone' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
        <div>
          <label htmlFor="password" className='block text-sm font-medium'>Password</label>
          <input type="password" placeholder='Enter Your password' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
        <button
            type="submit"
            className="bg-blue-600 w-full py-2 text-white rounded"
          >
            Register
          </button>
      </form>
      <Link to='/login'>
      <button
            className="mt-5 border w-full py-2 text-blue-600 rounded"
          >
            Login Now
          </button>
      
      </Link>
     </div>
    </div>
  )
}

export default Register
