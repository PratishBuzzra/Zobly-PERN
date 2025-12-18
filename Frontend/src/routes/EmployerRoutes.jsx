import React from 'react'
import { useContext } from 'react';

import { AuthContext } from '../Context/authContext';

import { Navigate, Outlet } from 'react-router-dom'



const EmployerRoutes =  () => {
  
   
     const {isLoggedIn, role, loading } = useContext(AuthContext)

     if(loading) return <div>loading...</div>

     if(!isLoggedIn || role !== "EMPLOYER"){
        return <Navigate to = "/unauthorized" />
     }
     return <Outlet />

}

export default EmployerRoutes
