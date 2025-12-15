import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-lg px-4 py-4 z-50'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <div className='flex items-center'>
                <Link to={"/"}><h1 className='text-4xl font-bold'>Zobly</h1></Link>
            </div>
            <nav className='flex items-center gap-7'>
              <ul className=' flex gap-7 text-xl font-semibold'>
                <NavLink to={"/"}>
                  <li>Home</li>
                </NavLink>
           
                <NavLink to={"/services"}>
                  <li>Services</li>
                </NavLink>
             
                <NavLink to={"/blogs"}>
                  <li>Blogs</li>
                </NavLink>
            
                <NavLink to={"/jobs"}>
                  <li>All Jobs</li>
                </NavLink>
              </ul>
               <Link to={"/register"}>
                <button className='bg-blue-600 px-3 py-1 text-white rounded cursor-pointer'>Register</button>
                </Link>

            </nav>
        </div>
      
    </div>
  )
}

export default Navbar
