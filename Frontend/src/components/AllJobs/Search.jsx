import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import FilterJob from "./FilterJob";
import { useContext } from "react";
import { JobContext } from "../../Context/JobContext";
import { useEffect } from "react";

const Search = () => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const  {allJobs} = useContext(JobContext)
  const [search, setSearch] = useState("")

 
  useEffect(()=>{
    const timer = setTimeout(() => {
      if(search.trim() !== ""){
        allJobs({search})
      }else{
        allJobs({})
      }
      
    }, 400);

    return ()=> clearTimeout(timer)
  }, [search])
  return (
    <div className="w-full flex items-center flex-col px-4">
      <div className="w-full flex items-center justify-center gap-4 max-w-6xl">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         
          placeholder="Search by title, company"
          className="
            w-full
            py-3
            pl-4
            pr-12
            text-gray-700
            placeholder-gray-400
            border
            border-gray-300
            rounded-full
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
          "
        />
       
         <IoSearchCircle
            size={32}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600"
          />
        
      </div>
      

      <FaFilter size= {32} className="cursor-pointer text-gray-700 hover:text-blue-600" onClick={()=>setShowFilterDropdown(prev => !prev)}/>
        </div>
      {showFilterDropdown && (
        <div className="w-full max-w-6xl mt-6">
          <FilterJob />

        </div>
      )}
      </div>
      
      
   
  );
};

export default Search;
