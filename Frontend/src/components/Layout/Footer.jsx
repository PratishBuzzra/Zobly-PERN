import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-white py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-8'>
          
          <div className='mb-6'>
            <h1 className='text-5xl font-bold'>Zobly</h1>
            <p className='mt-3 w-full font-semibold'>
              Find your career opportunities here. Search among thousands of jobs from top companies, industries, and locations of your choice.
            </p>
            <p className='mt-2 text-lg'>Phone: 01544121</p>
            <p className='text-lg'>Email: support@zobly.com</p>
            <p className='text-lg'>Location: Chamati, Kathmandu, Nepal</p>
          </div>

          <div className='mb-6'>
            <h3 className='font-bold text-2xl'>Quick Links</h3>
            <ul className='mt-2 text-lg flex flex-col gap-2'>
              <li>Home</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>FAQs/Help</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

         
          <div className='mb-6'>
            <ul className='mt-2 pt-8 text-lg flex flex-col gap-2'>
              <li>Terms and Condition</li>
              <li>Release Notes</li>
              <li>Contact Us</li>
            </ul>
          </div>

        
          <div className='mb-6'>
            <h3 className='font-bold text-2xl'>Follow Us</h3>
            <div className='flex items-center justify-start text-3xl gap-4 pt-2'>
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
