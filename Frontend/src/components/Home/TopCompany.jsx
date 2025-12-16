import React from 'react'
import { FaMicrosoft, FaApple, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiTesla, SiSpotify, SiAdobe, SiFacebook } from "react-icons/si";
const TopCompany = () => {
    const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "2nd Office Complex, Kathmandu, Nepal",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Palo Alto, California, USA",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "St. James's Market, London, UK",
      openPositions: 20,
      icon: <FaApple />,
    },
    {
      id: 4,
      title: "Google",
      location: "Belgrave House, London, UK",
      openPositions: 15,
      icon: <FaGoogle />,
    },
    {
      id: 5,
      title: "Amazon",
      location: "AWS, Washington, USA",
      openPositions: 30,
      icon: <FaAmazon />,
    },
    {
      id: 6,
      title: "Spotify",
      location: "Brussels, Belgium",
      openPositions: 8,
      icon: <SiSpotify />,
    },
    {
      id: 7,
      title: "Facebook",
      location: "Dublin, Ireland",
      openPositions: 25,
      icon: <SiFacebook />,
    },
    {
      id: 8,
      title: "Samsung",
      location: "Samsung-ro, Suwon, South Korea",
      openPositions: 18,
      icon: <FaApple />,
    },
  ];

  return (
    <div className="max-w-8xl px-6 mx-auto  pb-15 bg-gray-200">
        <h1 className="text-4xl font-bold text-center pt-10 pb-10">POPULAR CATEGORIES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {companies.map((element) => (
          <div key={element.id} className="flex justify-center flex-col gap-4 bg-white shadow-lg rounded-lg p-7">
            <div className='flex gap-4'>
            <div className="text-6xl">{element.icon}</div>
            <div>
              <p className="text-xl font-bold">{element.title}</p>
              <p className="text-gray-500">{element.location}</p>
            </div>

            </div>
            <button className='text-white w-full py-2 bg-green-600'>Open Positions {element.openPositions}</button>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCompany
