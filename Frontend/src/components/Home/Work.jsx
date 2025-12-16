import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const Work = () => {
  const WorkFlow = [
    { 
      id: 1,
      icon: <FaUserPlus className="text-indigo-600 w-10 h-10" />,
      title: "Create Account", 
      description: "Register to access live job listings and stay updated with new opportunities."
    },
    { 
      id: 2, 
      icon: <MdFindInPage className="text-indigo-600 w-10 h-10" />,
      title: "Find a Job/Post a Job", 
      description: "Search for jobs or post job openings to hire top talent.",
    },
    { 
      id: 3,
      icon: <IoMdSend className="text-indigo-600 w-10 h-10" />,
      title: "Apply for Job/Recruit Suitable Candidate", 
      description: "Apply for jobs or find the right candidates for your hiring needs."
    },
  ];

  return (
    <div className="mx-auto px-8 bg-gray-200">
      <h1 className="text-4xl font-bold text-center pt-10 pb-10">How Zobly Works!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {WorkFlow.map((element) => (
          <div key={element.id} className="flex flex-col items-center gap-4 justify-center bg-white shadow-md sm:shadow-lg p-8 sm:p-18">
            <div className="text-4xl">{element.icon}</div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-xl font-semibold text-center text-gray-900">{element.title}</p>
              <p className="text-center text-gray-700">{element.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
