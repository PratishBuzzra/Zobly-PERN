import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
const ApplyJob = () => {
   const base_url =  import.meta.env.VITE_API_URL
   const [addApplication, setAddApplication] = useState({
    name: "",
    email: "",
    PhoneNumber: "",
    address: "",
    coverLetter: "",
    resume: null
   })
    const { id: jobId } = useParams();

   const handleChange = (e)=>{
    const {name, type, value, files} = e.target

    if(type === "file"){
      setAddApplication({...addApplication, [name]: files[0]})
    }else{
      setAddApplication({...addApplication, [name]: value})
    }

   }

   const handleSubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', addApplication.name)
    formData.append('email', addApplication.email)
    formData.append('PhoneNumber', addApplication.PhoneNumber)
    formData.append('address', addApplication.address)
    formData.append('coverLetter', addApplication.coverLetter)
    formData.append('jobId', jobId) 

    if(addApplication.resume){
      formData.append('resume', addApplication.resume)
    }

    try {
      const res = await fetch(`${base_url}/applications/post-application`, {
        method: "POST",
        credentials: "include",
        body: formData
      })
      const data = await res.json()
       console.log("applciton subnited:", data.application);

     if(data.success){
      alert("Application submitted successfully")
      setAddApplication({
        name: "",
        email: "",
        PhoneNumber: "",
        address: "",
        coverLetter: "",
        resume: null
      })
    } else {
      alert(data.message)
    }
    } catch (error) {
      console.error('Error submitting form', error);
    }
    alert("application submitted")

   }
  return (
    <div className='min-h-screen w-full pt-24 pb-24 bg-gray-100'>
      <div className='flex flex-col items-center justify-center max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg'>
        <h3 className='text-3xl font-bold text-center mb-6'>Post New Job</h3>
        <form onSubmit={handleSubmit}  className='w-full flex flex-col space-y-6'>
         
          <div className='flex gap-6'>
          
            <input
              type="text"
              name='name'
              value={addApplication.name}
              onChange={handleChange}
              placeholder='Your Name'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

    
          <div className='flex gap-6'>
            <input
              type="text"
              name='email'
              value={addApplication.email}
              onChange={handleChange}
              placeholder='Your Email'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
           
          </div>

          <div>
            <input
              type="text"
              name='PhoneNumber'
              value={addApplication.PhoneNumber}
              onChange={handleChange}
              placeholder='Your PhoneNumber'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

     
          <div className='flex gap-6'>
             <input
              type="text"
              name='address'
              value={addApplication.address}
              onChange={handleChange}
              placeholder='Your Address'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

        
          <div className='space-y-6'>
            <textarea 
              rows={5}
              name='coverLetter'
              value={addApplication.coverLetter}
              onChange={handleChange}

              placeholder='cover letter...'
              className='w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600'
            ></textarea>
          </div>
            <input
              type="file"
              name='resume'
              onChange={handleChange}
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
              placeholder='Your Resume'
            />

          <button
            type="submit"
            className='mt-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition duration-300 w-full'
          >
            Send Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplyJob
