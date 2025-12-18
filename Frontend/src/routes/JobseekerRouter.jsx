import React from 'react'
import { useContext } from 'react';

import { AuthContext } from '../Context/authContext';
import { Navigate, Outlet } from 'react-router-dom'


const base_url =  import.meta.env.VITE_API_URL

const JobseekerRouter = () => {

         const {isLoggedIn, role, loading } = useContext(AuthContext)

        if(loading) return <div>loading...</div>
        if(!isLoggedIn || role !== "JOB_SEEKER"){
            return <Navigate to="/unauthorized"/>
        }

        return <Outlet />
         
}

export default JobseekerRouter
