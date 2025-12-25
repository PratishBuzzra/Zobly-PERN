// MobileMenu.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown";
import EmployerDropdown from "./EmployerDropdown";
const MobileMenu = ({ isLoggedIn, role, showDropdown, handleDropdown, showRoleDropdown, setShowRoleDropdown, handleMobileMenu }) => {
  return (
    <div className='md:hidden bg-white shadow-lg px-4 py-4'>
      <ul className='flex flex-col gap-4 text-lg font-semibold'>
        <NavLink to="/" onClick={handleMobileMenu}><li>Home</li></NavLink>
        <NavLink to="/services" onClick={handleMobileMenu}><li>Services</li></NavLink>
        <NavLink to="/blogs" onClick={handleMobileMenu}><li>Blogs</li></NavLink>
        <NavLink to="/jobs" onClick={handleMobileMenu}><li>All Jobs</li></NavLink>

        {isLoggedIn && role === "JOB_SEEKER" && (
          <NavLink to="/myapplication" onClick={handleMobileMenu}><li>My Applications</li></NavLink>
        )}

        {isLoggedIn && role === "EMPLOYER" && (
          <li className='relative'>
            <span onClick={handleDropdown} className="cursor-pointer">Employer</span>
            {showDropdown && <EmployerDropdown handleDropdown={handleDropdown} />}
          </li>
        )}

        {isLoggedIn ? (
          <li className='relative'>
            <span onClick={() => setShowRoleDropdown(prev => !prev)} className='flex items-center gap-2'>
              <FaUserCircle /> Profile
            </span>
            {showRoleDropdown && <ProfileDropdown handleProfileDropdown={() => setShowRoleDropdown(prev => !prev)} />}
          </li>
        ) : (
          <Link to="/register">
            <li><button className='bg-blue-600 px-3 py-1 text-white rounded w-full'>Register</button></li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
