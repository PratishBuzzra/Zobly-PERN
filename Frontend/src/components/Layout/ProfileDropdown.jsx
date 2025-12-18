import React, { useContext } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../Context/authContext';
const ProfileDropdown = ({handleProfileDropdown}) => {
     const {username, logout} = useContext(AuthContext)
  return (
    <div className='absolute top-12 left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-lg rounded z-50'>
        <div className='p-4 border-b'>
            <div className='flex items-center space-x-3'>
                <FaUserCircle className='text-xl'/>
                <h2 className='text-lg font-semibold'>{username}</h2>
            </div>
        </div>
        <div onClick={handleProfileDropdown}>
         <a href="#"  className='flex items-center justify-between px-3 py-3'>
        <div>
        <p>Profile</p>
        </div>
        <span>&gt;</span>
    </a>
        </div>
   
   <div onClick={handleProfileDropdown}>
     <a href="#"  className='flex items-center justify-between px-3 py-3'>
        <div>
        <p>Setting</p>
        </div>
        <span>&gt;</span>
    </a>
   </div>
    
    <div onClick={handleProfileDropdown}>
<a onClick={logout}  className='flex items-center justify-between px-3 py-3 cursor-pointer'>
        <div>
        <p>LogOut</p>
        </div>
        <span>&gt;</span>
    </a>
    </div>
     
    </div>
  )
}

export default ProfileDropdown
