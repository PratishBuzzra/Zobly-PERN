import React from 'react';
import { useState } from 'react';

const PostJob = () => {
  const base_url =  import.meta.env.VITE_API_URL
  const [addJob, SetAddJob] = useState({
    title: "",
    companyName: "",
    location: "",
     salary: "",
    jobType: "",
    experienceLevel: "",
    field: "",
    description: "",
    qualifications: "",
    companyBackground: "",
    image: null
  })

  const handleChange = (e)=>{
    const {name, type, value, files} = e.target

    if(type==="file"){
      SetAddJob({...addJob, [name]: files[0]})
    }else{
      SetAddJob({...addJob, [name]: value})
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('title', addJob.title);
    formData.append('companyName', addJob.companyName)
    formData.append('location', addJob.location)
     formData.append('salary', addJob.salary)
     formData.append('jobType', addJob.jobType);
    formData.append('experienceLevel', addJob.experienceLevel)
    formData.append('field', addJob.field)
     formData.append('description', addJob.description)
     formData.append('qualifications', JSON.stringify(addJob.qualifications.split(',').map(q=>q.trim())));
    formData.append('companyBackground', addJob.companyBackground)
  
    if(addJob.image){
      formData.append("image", addJob.image)
    }
    
    try {
      const res = await fetch(`${base_url}/job/post-job`, {
        method: "POST",
        credentials: "include",
        body: formData
      })
       const data = await res.json();
      
      console.log("job added:", data.job);
        SetAddJob({
     title: "",
    companyName: "",
    location: "",
     salary: "",
    jobType: "",
    experienceLevel: "",
    field: "",
    description: "",
    qualifications: "",
    companyBackground: "",
    image: null
      })
    } catch (error) {
       console.error('Error submitting form', error);
    }
 alert("job added");
  }
  return (
    <div className='min-h-screen w-full pt-24 pb-24 bg-gray-100'>
      <div className='flex flex-col items-center justify-center max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg'>
        <h3 className='text-3xl font-bold text-center mb-6'>Post New Job</h3>
        <form onSubmit={handleSubmit} className='w-full flex flex-col space-y-6'>
          {/* File Upload & Job Title */}
          <div className='flex gap-6'>
            <input
              type="file"
              name='image'
              onChange={handleChange}
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
              placeholder='Add Image'
            />
            <input
              type="text"
              name='title'
              value={addJob.title}
              onChange={handleChange}
              placeholder='Job Title'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

          {/* Company Name & Location */}
          <div className='flex gap-6'>
            <input
              type="text"
              name='companyName'
              value={addJob.companyName}
              onChange={handleChange}
              placeholder='Company Name'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
            <input
              type="text"
              name='location'
              value={addJob.location}
              onChange={handleChange}
              placeholder='Location'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

          {/* Salary */}
          <div>
            <input
              type="text"
              name='salary'
              value={addJob.salary}
              onChange={handleChange}
              placeholder='Salary'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

          {/* Job Type & Experience */}
          <div className='flex gap-6'>
            <select name='jobType' value={addJob.jobType} onChange={handleChange}
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            >
              <option value="">Job Type</option>
              <option value="Full_Time">Full-Time</option>
              <option value="Part_Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <select name='experienceLevel' value={addJob.experienceLevel} onChange={handleChange}
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            >
              <option value="">Experience</option>
              <option value="Internship">Internship</option>
              <option value="Entry_Level">Entry-Level</option>
              <option value="Mid_Level">Mid-Level</option>
              <option value="Senior_Level">Senior-Level</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <select name='field' value={addJob.field} onChange={handleChange}
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            >
              <option value="">Fields</option>
              <option value="Tech">Tech</option>
              <option value="Marketing">Marketing</option>
              <option value="HealthCare">HealthCare</option>
              <option value="Industry">Industry</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          {/* Text Areas for Description, Qualifications, and Company Background */}
          <div className='space-y-6'>
            <textarea 
              rows={5}
              name='description'
              value={addJob.description}
              onChange={handleChange}
              placeholder='Job Description'
              className='w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600'
            ></textarea>

            <textarea
              rows={5}
              name='qualifications'
              value={addJob.qualifications}
              onChange={handleChange}
              placeholder='Qualifications'
              className='w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600'
            ></textarea>

            <textarea
              rows={5}
              name='companyBackground'
              value={addJob.companyBackground}
              onChange={handleChange}
              placeholder='Company Background'
              className='w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='mt-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition duration-300 w-full'
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
