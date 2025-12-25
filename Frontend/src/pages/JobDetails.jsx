import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCashOutline } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";
import { useContext } from "react";
import { JobContext } from "../Context/JobContext";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../Context/authContext";
import EditJob from "./EmployerPage/EditJob";



const JobDetails = () => {
   const {allJobs, editJob, jobById, deleteJob} = useContext(JobContext)
   const {role, userId, isLoggedIn, loading: authLoading} = useContext(AuthContext)
   const [job, setJob] = useState(null)
   
   const {id} = useParams();
   const [isEditing, setIsEditing] = useState(false)
   
  
 const navigate = useNavigate();

useEffect(() => {
  if (!id || authLoading) return;

  const fetchJob = async () => {
    const jobData = await jobById(id);
    setJob(jobData || null);
  };

  fetchJob();
}, [id, authLoading, jobById]);


   console.log("job state", job);


   if (authLoading) {
  return <div className="p-24 text-center">Checking authentication...</div>;
}


   if (!job) {
    return <div className="p-24 text-center">Loading job details...</div>;
  }
//  console.log("Debug:", {
//     userId,
//     jobEmployerId: job?.employerId,
//     role,
//     isLoggedIn,
//     comparison: userId === job?.employerId
//   });

const isOwner =
  !authLoading &&
  isLoggedIn &&
  role === "EMPLOYER" &&
  userId !== null &&
  job?.employerId === userId;

  const handleEditSubmit = async(updatedFormData)=>{
    await editJob(job.id, updatedFormData);
    allJobs();
    const updatedJob = await jobById(job.id)
    setJob(updatedJob)
    setIsEditing(false)

  }

  const handleDelete = async()=>{
    if(window.confirm("Are you sure you want to delete job?")){
      await deleteJob(job.id)
      alert("deleted successfully")
      navigate("/your-jobs")
      
    }
  }
  return (
    <div className="w-full max-w-7xl  mx-auto px-4 md:px-6 py-24">
       
      
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
        
        <div className="flex items-center gap-6 mb-8">
          <img
            src={job.image}
            alt="company"
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
            <p className="text-lg text-gray-600">{job.companyName}</p>
          </div>
        </div>

       
        <div className="flex flex-wrap gap-3 text-sm mb-10">
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <FaLocationDot /> {job.location}
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <IoCashOutline /> {job.salary}
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <IoMdBriefcase /> {job.jobType}
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <SiLevelsdotfyi /> {job.experienceLevel}
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <TbCategoryFilled /> {job.field}
          </span>
        </div>

     
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">
            {job.description}
          </p>
        </section>

        {/* Qualifications */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">
            Minimum Qualifications
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {job.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

    
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3">
            About {job.companyName}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {job.companyBackground}
          </p>
        </section>

{isOwner ? (
          <div className="border-t pt-6 flex gap-3">
            <button onClick={() => setIsEditing(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Edit Job
            </button>
            <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Delete Job</button>
          </div>
        ) : (
          isLoggedIn && role === "JOB_SEEKER" && (
            <div className="border-t pt-6 flex justify-end">
              <button
  className="px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
  onClick={() => navigate(`/jobs/${job.id}/apply-job`)}
>
  Apply Now
</button>
            </div>
          )
        )}
      </div>
      
          {isEditing && (
      <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
  <div className="min-h-screen flex items-start md:items-center justify-center p-4">
    <div className="bg-white p-4 sm:p-6 rounded-xl w-full max-w-3xl relative">
            <button
              className="absolute top-3 right-6 md:top-5 md:right-7 text-gray-700 hover:text-black text-xl"
              onClick={() => setIsEditing(false)}
            >
              &times;
            </button>
            <EditJob
              existingJob={job}
              onCancel={() => setIsEditing(false)}
              onSubmit={handleEditSubmit}
            />
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
