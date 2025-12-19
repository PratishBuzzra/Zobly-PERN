import React from "react";

const FilterJob = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-6">Filter Jobs</h1>

      {/* Industry Filter */}
      <div className="flex flex-col gap-2 mb-6">
        <label className="text-lg font-semibold">Top Industry</label>
        <select className="w-full max-w-sm border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option value="">Select Industry</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Industry">Industry</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      {/* Job Type */}
      <div className="flex flex-col gap-3 mb-6">
        <h3 className="text-lg font-semibold">Job Type</h3>
        <div className="flex flex-wrap gap-3">
          {["Full Time", "Part-Time", "Remote", "Hybrid"].map((type) => (
            <button
              key={type}
              className="px-4 py-2 border rounded-lg text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Type */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Experience Level</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Internship",
            "Entry-Level",
            "Mid-Level",
            "Senior-Level",
          ].map((level) => (
            <button
              key={level}
              className="px-4 py-2 border rounded-lg text-blue-600 hover:bg-blue-50 hover:border-blue-500 transition"
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
