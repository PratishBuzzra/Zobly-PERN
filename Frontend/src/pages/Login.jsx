import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/authContext';


const base_url = import.meta.env.VITE_API_URL

const Login = () => {
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)
  const handleChange = (e)=>{
    setFormData(prev=>({
      ...prev,
      [e.target.name]: e.target.value 
    }))
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const res = await fetch(`${base_url}/user/login`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        credentials: "include",
        body: JSON.stringify({
          role: formData.role,
          email: formData.email,
          password: formData.password
        })
      })
      let data = await res.json();

      if(res.ok){
        alert('loginsuccessful');
        login()
        navigate("/jobs")
    
        
        
      }else{
        alert(data.error || 'login failed')
      }
      
    } catch (error) {
         console.error('Error login', error);
      alert('error occured please try again')
    }
  }
  return (
   <div className='min-h-screen flex justify-center items-center py-20'>
     <div className='w-full p-8 max-w-md'>
      <h1 className='text-2xl mb-4 text-center'>Login to our account</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='role' className='block text-sm font-medium'>Login As</label>
          <select id='role' name='role' value={formData.role} onChange={handleChange} className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'>
            <option value="">Select Role</option>
            <option value="EMPLOYER">Employer</option>
            <option value="JOB_SEEKER">Job Seeker</option>
          </select>
        </div>
       
        <div>
          <label htmlFor="email" className='block text-sm font-medium'>Email</label>
          <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
       
        <div>
          <label htmlFor="password" className='block text-sm font-medium'>Password</label>
          <input type="password" id='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter Your password' className='border border-gray-300 px-3 py-2 mt-1 w-full rounded'/>
        </div>
        <button
            type="submit"
            className="bg-blue-600 w-full py-2 text-white rounded"
          >
            Login
          </button>
      </form>
      <Link to='/register'>
      <button
            className="mt-5 border w-full py-2 text-blue-600 rounded"
          >
            Register Now
          </button>
      
      </Link>
     </div>
    </div>
  )
}

export default Login
