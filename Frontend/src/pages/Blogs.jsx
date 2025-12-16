import React from 'react'
import ConstantTop from '../components/Layout/ConstantTop'
import BlogList from '../components/Blog/BlogList'

const Blogs = () => {
  return (
    <div>
      <ConstantTop
     cName= "relative w-full  h-[50vh] overflow-hidden bg-black"
     herodesc="absolute inset-0 flex flex-col justify-center text-center items-center mt-16"
     title={<>Articles Related to Jobs <br/> and Carrer Development</>}
     
     />
     <BlogList />
    </div>
  )
}

export default Blogs
