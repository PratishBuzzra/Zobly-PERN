import React from 'react'
import Navbar from './components/Layout/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import AllJobs from './pages/AllJobs'
import Register from './pages/Register'
import Footer from './components/Layout/Footer'
import Copyright from './components/Layout/Copyright'
import Login from './pages/Login'
import Applicants from './pages/EmployerPage/Applicants'
import PostJob from './pages/EmployerPage/PostJob'
import ViewYourJob from './pages/EmployerPage/ViewYourJob'
import EmployerRoutes from './routes/EmployerRoutes'
import MyApplication from './pages/JobSeekerPage/MyApplication'
import JobseekerRouter from './routes/JobseekerRouter'
import JobDetails from './pages/JobDetails'
import ApplyJob from './pages/JobSeekerPage/ApplyJob'

const App = () => {
  return (
    <div>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
          <Route path='/blogs' element={<Blogs />}/>
            <Route path='/jobs' element={<AllJobs />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/login' element={<Login />} />
               <Route path="/jobs/:id" element={<JobDetails />} />
              
            <Route element={<EmployerRoutes />}>
              <Route path='/applicants' element={<Applicants />} />
              <Route path='/post-job' element={<PostJob />} />
              <Route path='/your-jobs' element={<ViewYourJob />} />

            </Route>
            <Route element={<JobseekerRouter />}>
              <Route path='/myapplication' element={<MyApplication />} />
              <Route path = '/jobs/:id/apply-job' element = {<ApplyJob />} />
              

            </Route>
      </Routes>
      <Footer />
      <Copyright />
     
    </div>
  )
}

export default App
