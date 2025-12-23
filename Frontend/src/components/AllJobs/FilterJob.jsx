import React from "react";
import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";
import { useState } from "react";

const FilterJob = () => {
  const  {allJobs} = useContext(JobContext)
  const [filters, setFilters] = useState({
    field: "",
    jobType: "",
    experienceLevel: ""

  })

  const applyFilter = (newFilters) =>{
    const updatedFilters = {...filters, ...newFilters}
    setFilters(updatedFilters)
    allJobs(updatedFilters)  
  }

  const resetFilter = ()=>{
    const emptyFilters = {
      field: "",
      jobType: "",
      experienceLevel: ""
    }
    setFilters(emptyFilters);
    allJobs();
  }
  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-bold mb-6">Filter Jobs</h1>
       <button
    onClick={resetFilter}
    className="px-4 py-2 text-sm font-semibold text-red-600 border border-red-500 rounded-lg hover:bg-red-50 transition"
  >
    Reset Filters
  </button>
      </div>
     

     
      <div className="flex flex-col gap-2 mb-6">
        <label className="text-lg font-semibold">Top Fields</label>
        <select value={filters.field} onChange={(e)=>applyFilter({field: e.target.value})} className="w-full max-w-sm border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option value="">Select Industry</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Industry">Industry</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

    
      <div className="flex flex-col gap-3 mb-6">
        <h3 className="text-lg font-semibold">Job Type</h3>
        <div className="flex flex-wrap gap-3">
          {["Full_Time", "Part_Time", "Remote", "Hybrid"].map((type) => (
            <button
              key={type}
              onClick={()=>applyFilter({jobType: type})}
              className={`px-4 py-2 border rounded-lg ${filters.jobType === type ? "bg-blue-600 text-white" : "text-blue-600"}  hover:bg-blue-50 hover:border-blue-500 transition`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Experience Level</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Internship",
            "Entry_Level",
            "Mid_Level",
            "Senior_Level",
          ].map((level) => (
            <button
              key={level}
              onClick={()=>applyFilter({experienceLevel: level})}
              className={`px-4 py-2 border rounded-lg ${filters.experienceLevel === level ? "bg-blue-600 text-white" : "text-blue-600"}  hover:bg-blue-50 hover:border-blue-500 transition`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterJob;
