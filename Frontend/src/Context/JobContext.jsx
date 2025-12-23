import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";


export const JobContext = createContext()

const base_url = import.meta.env.VITE_API_URL

const JobProvider = ({children}) => {
    const [jobs, setJob] = useState([])
    const [userJobs, setUserJobs] = useState([])

    const allJobs = async (filters = {})=>{
        try {
            const query = new URLSearchParams(filters).toString()

            const res = await fetch(`${base_url}/job/all-job?${query}`, {
                method: 'GET',
                credentials: "include"
            })

            if(res.ok){
                const data = await res.json()
                setJob(data.job)
            }
            
        } catch (error) {
            console.error("Failed to fecth jobs", error);
        }
    }

    const jobById = async (jobId)=>{
        try {
            const res = await fetch(`${base_url}/job/${jobId}`, {
                method:"GET",
                credentials: "include"
            })
             if(res.ok){
                const data = await res.json()
                 console.log("Job API response:", data);
                return data.job
            }
        } catch (error) {
            console.error("Failed to fecth jobs", error);
            
        }
    }
       const JobByUser = async ()=>{
        try {
            const res = await fetch(`${base_url}/job/yourpostedjob`, {
                method: 'GET',
                credentials: "include"
            })

            if(res.ok){
                const data = await res.json()
                console.log("Job API response:", data);
                setUserJobs(data.job)
            }
            
        } catch (error) {
            console.error("Failed to fecth jobs", error);
        }
    }

    
    return (
    <JobContext.Provider value={{jobs, allJobs, jobById, JobByUser, userJobs}}>
        {children}
    </JobContext.Provider>
)
}




export default JobProvider