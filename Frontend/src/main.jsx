import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/authContext.jsx'
import JobProvider from './Context/JobContext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <JobProvider>
    <App />
    </JobProvider>
  </AuthProvider>
  </BrowserRouter>
)
