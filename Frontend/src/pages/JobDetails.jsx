import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCashOutline } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";
import { TbCategoryFilled } from "react-icons/tb";

const JobDetails = () => {
  const job = {
    image: "/hero.jpg",
    title: "Graphics & Design",
    company: "Google",
    location: "Kathmandu, Nepal",
    salary: "Salary Undisclosed",
    jobtype: "Full-time",
    experience: "Entry-Level",
    category: "Tech",
    description:
      "You will work on a variety of design projects for Google's platform.",
    qualifications: [
      "Bachelor's degree in Graphic Design or related field",
      "Proficient in Adobe Creative Suite",
      "Strong portfolio",
    ],
    companyBackground:
      "Google is a multinational tech company, best known for its search engine and innovation in AI, cloud computing, and digital services.",
  };

  return (
    <div className="w-full max-w-7xl  mx-auto px-6 p-24">
      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={job.image}
            alt="company"
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-lg text-gray-600">{job.company}</p>
          </div>
        </div>

        {/* Job Meta Info */}
        <div className="flex flex-wrap gap-3 text-sm mb-10">
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <FaLocationDot /> {job.location}
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <IoCashOutline /> {job.salary}
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <IoMdBriefcase /> {job.jobtype}
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <SiLevelsdotfyi /> {job.experience}
          </span>
          <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <TbCategoryFilled /> {job.category}
          </span>
        </div>

        {/* Job Description */}
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

        {/* Company Info */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3">
            About {job.company}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {job.companyBackground}
          </p>
        </section>

        {/* Apply Section */}
        <div className="border-t pt-6 flex justify-end">
          <button className="px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
