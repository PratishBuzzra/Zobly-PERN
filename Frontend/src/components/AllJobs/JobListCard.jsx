import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCashOutline } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";

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
    <div>
            {jobList.map((job)=>(
        <div>
                <div>
                    <img src={job.image} alt="" />
                    <h1>{job.title}</h1>
                    <span>{job.company}</span>
                </div>
                <div>
                    <FaLocationDot />
                    <p>{job.location}</p>
                    <IoCashOutline />
                    <p>{job.salary}</p>
                    <IoMdBriefcase />
                    <p>{job.jobtype}</p>
                    <SiLevelsdotfyi />
                    <p>{job.experience}</p>
                    <TbCategoryFilled />
                    <p>{job.Category}</p>
                </div>
                <button>Job details</button>
        </div>
            ))}
        <div>
            
        </div>
      
    </div>
  )
}

export default JobListCard
