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

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
          <Route path='/blog' element={<Blogs />}/>
            <Route path='/jobs' element={<AllJobs />}/>
              <Route path='/register' element={<Register />}/>
      </Routes>
      <Footer />
      <Copyright />
      </BrowserRouter>
    </div>
  )
}

export default App
