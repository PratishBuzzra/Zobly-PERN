import React, { useContext, useState } from 'react'
import {Link, NavLink} from "react-router-dom"
import { AuthContext } from '../../Context/authContext'
import EmployerDropdown from './EmployerDropdown'
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

import ProfileDropdown from './ProfileDropdown';
import MobileMenu from './MobileMenu';
const Navbar = () => {
  const {isLoggedIn, username, logout,role} = useContext(AuthContext)
  const [showDropdown, setShowDropdown] = useState(false);
  const [showRoleDropdown, setShowRolwDropdown] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const handleDropdown = () => setShowDropdown(prev => !prev)
  const handleMobileMenu = () => setMobileMenu(prev => !prev)
  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-lg px-4 py-4 z-50'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <div className='flex items-center'>
                <Link to={"/"}><h1 className='text-4xl font-bold'>Zobly</h1></Link>
            </div>
            <nav className='hidden md:flex items-center gap-7'>
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

                {isLoggedIn && role === "JOB_SEEKER" ? (
                  <NavLink to={"/myapplication"}>
                    <li>My Applications</li>
                  </NavLink>
                ):null}

                {isLoggedIn && role === "EMPLOYER" ? (
                  
                    <li className='relative'>
                      <span 
                  onClick={handleDropdown} 
                  className="cursor-pointer"
                >
                  Employer
                </span>
                    {showDropdown && (
                      
                        <EmployerDropdown handleDropdown={handleDropdown}/>
                      
                    ) }
                    </li>
                   
                ):null}
              </ul>
              {isLoggedIn ? (
                <div className='relative'>
                  <FaUserCircle onClick={()=>setShowRolwDropdown(prev => ! prev)} className='text-4xl cursor-pointer text-center'/>
                  {showRoleDropdown && <ProfileDropdown handleProfileDropdown={()=>setShowRolwDropdown(prev => ! prev)}/>}
                </div>
              ):(
              <Link to={"/register"}>
                <button className='bg-blue-600 px-3 py-1 text-white rounded cursor-pointer'>Register</button>
                </Link>
              )}
            </nav>
            <div className='md:hidden flex items-center'>
          <button onClick={handleMobileMenu}>
            {mobileMenu ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
          </button>
        </div>
        </div>

        {mobileMenu && (
          <MobileMenu 
          isLoggedIn={isLoggedIn}
          role={role}
          showDropdown={showDropdown}
          handleDropdown={handleDropdown}
          showRoleDropdown={showRoleDropdown}
          setShowRoleDropdown={setShowRolwDropdown}
          handleMobileMenu={handleMobileMenu}
          />
        )}
      
    </div>
  )
}

export default Navbar
