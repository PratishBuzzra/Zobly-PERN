import React from 'react'
import Hero from '../components/Home/Hero'
import Details from '../components/Home/Details'
import Work from '../components/Home/Work'
import PopularCat from '../components/Home/PopularCat'
import TopCompany from '../components/Home/TopCompany'

const Home = () => {
  return (
    <div>
      <Hero />
      <Details />
      <Work />
      <PopularCat />
      <TopCompany />
    </div>
  )
}

export default Home
