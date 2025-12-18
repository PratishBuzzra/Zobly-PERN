import React from 'react';
import { NavLink } from "react-router-dom";

const EmployerDropdown = ({handleDropdown}) => {
  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2 mt-2  shadow-lg  bg-white w-64 z-50">
      <div className="flex flex-col">
        <NavLink
          to="/applicants" 
          className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
          onClick={handleDropdown}
        >
          Applicant's Application
        </NavLink>
        <NavLink
          to="/post-job"
          className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
          onClick={handleDropdown}
        >
          Post New Job
        </NavLink>
        <NavLink
          to="/your-jobs"
          className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
          onClick={handleDropdown}
        >
          View Your Jobs
        </NavLink>
      </div>
    </div>
  );
};

export default EmployerDropdown;
