import React from 'react'

const ApplyJob = () => {
  return (
    <div className='min-h-screen w-full pt-24 pb-24 bg-gray-100'>
      <div className='flex flex-col items-center justify-center max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg'>
        <h3 className='text-3xl font-bold text-center mb-6'>Post New Job</h3>
        <form  className='w-full flex flex-col space-y-6'>
          {/* File Upload & Job Title */}
          <div className='flex gap-6'>
          
            <input
              type="text"
              name='name'
            
              placeholder='Your Name'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

    
          <div className='flex gap-6'>
            <input
              type="text"
              placeholder='Your Email'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
           
          </div>

          <div>
            <input
              type="text"
              name='phonenumbber'
              placeholder='Your PhoneNumber'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

     
          <div className='flex gap-6'>
             <input
              type="text"
              name='address'
              placeholder='Your Address'
              className='border-b border-gray-300 text-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-600'
            />
          </div>

        
          <div className='space-y-6'>
            <textarea 
              rows={5}
              name='coverletter'

              placeholder='cover letter...'
              className='w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-600'
            ></textarea>
          </div>
            <input
              type="file"
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
