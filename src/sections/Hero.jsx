import React from "react";
import portrait from "../assets/aura.jpeg"

function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-16 min-h-screen">
      
      {/* Left Content */}
      <div className="max-w-2xl">
        <p className="text-[#cb6ce6] text-xl md:text-2xl mb-4">&gt; Hello, I am</p>
        <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-bold text-white mb-6 leading-none tracking-wide">
          Stefan Louis<br />Duran
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
          An aspiring developer who wants to build projects, write clean code, and learn new technologies.
        </p>
      </div>

      {/* Right Image with Offset Border */}
      <div className="relative shrink-0 mt-12 md:mt-0">
        <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#cb6ce6] z-0"></div>
        <img 
          src={portrait} 
          alt="Stefan Louis Duran" 
          className="relative z-10 w-72 md:w-96 2xl:w-[420px] h-auto object-cover grayscale hover:grayscale-0 transition duration-500 border-2 border-black"
        />
      </div>

    </section>
  );
}

export default Hero;