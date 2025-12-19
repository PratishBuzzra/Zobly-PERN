import React from 'react'
import Search from '../components/AllJobs/Search'
import FilterJob from '../components/AllJobs/FilterJob'
import JobListCard from '../components/AllJobs/JobListCard'

const AllJobs = () => {
  return (
    <div className='max-w-full h-screen pt-20'>
     
      <div className='flex flex-col items-center justify-center space-y-5'>
        <Search />
        
         <h1 className='text-center text-3xl font-bold'>All Available Jobs</h1>
        <JobListCard />

      </div>
    </div>
  )
}

export default AllJobs
