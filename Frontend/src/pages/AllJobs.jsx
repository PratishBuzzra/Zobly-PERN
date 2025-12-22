import React from 'react'
import Search from '../components/AllJobs/Search'

import AllJobCard from '../components/AllJobs/AllJobCard'

const AllJobs = () => {
  return (
    <div className='w-full min-h-screen pt-24'>
     
      <div className='flex flex-col items-center gap-8'>
        <Search />
        
         <h1 className='text-3xl font-bold'>All Available Jobs</h1>
        <AllJobCard />

      </div>
    </div>
  )
}

export default AllJobs
