import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const base_url = import.meta.env.VITE_API_URL

const Register = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    PhoneNumber: "",
    password: ""

  })
   const navigate = useNavigate();

   const handleChange =(e)=>{
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
   }
const handleSubmit = async (e)=>{
  e.preventDefault();
  const {role, name, email, PhoneNumber, password} = formData
  console.log(base_url);
  
  try {
    const res = await fetch(`${base_url}/user/register`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({role, name, email, PhoneNumber, password})
    })
    const data = await res.json()
    console.log(data);
    if(res.ok){
      alert('Register succesful please login');
      navigate('/login')
    }else{
      alert(data.error||'registration failed')
    }
    
  } catch (error) {
     console.error('SignUp error', error);
      alert('Error has occured please try again')
  }

}
  return (
    <div className='min-h-screen flex justify-center items-center py-20'>
     <div className='w-full p-8 max-w-md'>
      <h1 className='text-2xl mb-4 text-center'>Create a New Account</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='role' className='block text-sm font-medium'>Register As</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange} className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'>
            <option value="">Select Role</option>
            <option>EMPLOYER</option>
            <option>JOB_SEEKER</option>
          </select>
        </div>
        <div>
          <label htmlFor="name" className='block text-sm font-medium'>Name</label>
          <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter Your Name' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
        <div>
          <label htmlFor="email" className='block text-sm font-medium'>Email</label>
          <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
        <div>
          <label htmlFor="phone" className='block text-sm font-medium'>Phone Number</label>
          <input type="text" id='phone' name='PhoneNumber' value={formData.PhoneNumber} onChange={handleChange} placeholder='Enter Your phone' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
        <div>
          <label htmlFor="password" className='block text-sm font-medium'>Password</label>
          <input type="password" id='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter Your password' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
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
