import React from 'react'
import ConstantTop from '../components/Layout/ConstantTop'
import TopService from '../components/Services/TopService'

const Services = () => {
  return (
    <div>
     <ConstantTop 
     cName= "relative w-full  h-[50vh] overflow-hidden bg-black"
     herodesc="absolute inset-0 flex flex-col justify-center text-center items-center mt-16"
     title="Move ahead in career faster"
     text="With Our Paid Services"
     />
     <TopService />
    </div>
  )
}

export default Services
