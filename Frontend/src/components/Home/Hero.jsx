import React from "react";

const Hero = () => {
  return (
    <div className="relative md: overflow-hidden">
      

      <img
        src="/hero.jpg"
        alt="job"
        className="absolute inset-0 w-full h-full object-cover opacity-60 md:hidden"
      />

      <div className="relative container mx-auto px-6 pt-32 md:pt-40 pb-15 flex flex-col md:flex-row justify-between items-center">

        
        <div className="z-10 text-center md:text-left md: text-white md:text-gray-900">
          <h1 className="text-4xl text-black md:text-5xl font-bold leading-tight">
            Find a job that suits
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-black md:text-indigo-600 mt-2">
            Your interest and skills
          </h1>

          <p className="mt-6 text-lg text-black md:text-gray-600 max-w-xl mx-auto md:mx-0">
            Discover job opportunities that match your skills and passions.
            Connect with employers seeking talent like yours for rewarding careers.
          </p>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>

        {/* Image Section (Desktop Only) */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src="/hero.jpg"
            alt="job"
            className="w-full "
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
