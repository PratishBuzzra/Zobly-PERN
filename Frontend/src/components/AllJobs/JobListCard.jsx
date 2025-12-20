import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCashOutline } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';

const JobListCard = () => {
    const jobList =  [
    {
      id: 1,
      image: "/hero.jpg",
      title: "Graphics & Design",
      company: "Google",
      location: "Kathmandu, Nepal",
      salary: "Salary Undisclosed",
      jobtype: "Full-time",
      experience: "Entry-Level",
      Category: "Tech"
     
    },
    {
      id: 2,
      image: "/hero.jpg",
      title: "Graphics & Design",
      company: "Google",
      location: "Kathmandu, Nepal",
      salary: "Salary Undisclosed",
      jobtype: "Full-time",
      experience: "Entry-Level",
      Category: "Tech"
     
    },
    {
      id: 3,
      image: "/hero.jpg",
      title: "Graphics & Design",
      company: "Google",
      location: "Kathmandu, Nepal",
      salary: "Salary Undisclosed",
      jobtype: "Full-time",
      experience: "Entry-Level",
      Category: "Tech"
     
    },
   {
      id: 4,
      image: "/hero.jpg",
      title: "Graphics & Design",
      company: "Google",
      location: "Kathmandu, Nepal",
      salary: "Salary Undisclosed",
      jobtype: "Full-time",
      experience: "Entry-Level",
      Category: "Tech"
     
    },
    {
      id: 5,
      image: "/hero.jpg",
      title: "Graphics & Design",
      company: "Google",
      location: "Kathmandu, Nepal",
      salary: "Salary Undisclosed",
      jobtype: "Full-time",
      experience: "Entry-Level",
      Category: "Tech"
     
    }
    
  ];
  return (
     <div className="w-full max-w-7xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="flex flex-col justify-between bg-white shadow-md hover:shadow-xl transition rounded-xl p-6"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={job.image}
                alt="company"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-bold">{job.title}</h2>
                <p className="text-gray-600 font-medium">{job.company}</p>
              </div>
            </div>

            {/* Job Info */}
            <div className="space-y-3 text-gray-700 text-sm">
              <div className="flex items-center gap-3">
                <FaLocationDot />
                <span>{job.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <IoCashOutline />
                <span>{job.salary}</span>
              </div>

              <div className="flex items-center gap-3">
                <IoMdBriefcase />
                <span>{job.jobtype}</span>
              </div>

              <div className="flex items-center gap-3">
                <SiLevelsdotfyi />
                <span>{job.experience}</span>
              </div>

              <div className="flex items-center gap-3">
                <TbCategoryFilled />
                <span>{job.Category}</span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-6 w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition">
               <Link to={`/jobs/${job.id}`}>Job Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobListCard
