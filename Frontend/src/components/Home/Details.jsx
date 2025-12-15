import React from 'react';
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const Details = () => {
  const details = [
    { id: 1, title: "1,23,441", subTitle: "Live Jobs", icon: <FaSuitcase className="text-indigo-600 w-10 h-10" /> },
    { id: 2, title: "91,220", subTitle: "Companies", icon: <FaBuilding className="text-indigo-600 w-10 h-10" /> },
    { id: 3, title: "2,34,200", subTitle: "Job Seekers", icon: <FaUsers className="text-indigo-600 w-10 h-10" /> },
    { id: 4, title: "1,03,761", subTitle: "Employers", icon: <FaUserPlus className="text-indigo-600 w-10 h-10" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {details.map((element) => (
          <div key={element.id} className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-8">
            <div className="text-4xl">{element.icon}</div>
            <div>
              <p className="text-xl font-bold">{element.title}</p>
              <p className="text-gray-500">{element.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
