import React from 'react';

const PostJob = () => {
  return (
    <div className='min-h-screen w-full pt-24 pb-24 bg-gray-100'>
      <div className='flex flex-col items-center justify-center max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg'>
        <h3 className='text-3xl font-bold text-center mb-6'>Post New Job</h3>
        <form className='w-full flex flex-col space-y-6'>
          {/* File Upload & Job Title */}
          <div className='flex gap-6'>
            <input
              type="file"
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
              placeholder='Add Image'
            />
            <input
              type="text"
              placeholder='Job Title'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

          {/* Company Name & Location */}
          <div className='flex gap-6'>
            <input
              type="text"
              placeholder='Company Name'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
            <input
              type="text"
              placeholder='Location'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

          {/* Salary */}
          <div>
            <input
              type="text"
              placeholder='Salary'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

          {/* Job Type & Experience */}
          <div className='flex gap-6'>
            <select
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            >
              <option value="">Job Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <select
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            >
              <option value="">Experience</option>
              <option value="Internship">Internship</option>
              <option value="Entry-Level">Entry-Level</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior-Level">Senior-Level</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <select
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
              placeholder='Job Description'
              className='w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600'
            ></textarea>

            <textarea
              rows={5}
              placeholder='Qualifications'
              className='w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600'
            ></textarea>

            <textarea
              rows={5}
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
