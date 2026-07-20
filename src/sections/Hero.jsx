import portrait from "../assets/aura.jpeg"

function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16 min-h-screen">
      
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="text-[#cb6ce6] text-xl mb-4">&gt; Hello, I am</p>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-wide">
          Stefan Louis<br />Duran
        </h1>
        <p className="text-gray-400 leading-relaxed max-w-md">
          An aspiring developer who wants to build projects, write clean code, and learn new technologies.
        </p>
      </div>

      {/* Right Image with Offset Border */}
      <div className="relative shrink-0 mt-12 md:mt-0">
        <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#cb6ce6] z-0"></div>
        <img 
          src={portrait} 
          alt="Stefan Louis Duran" 
          className="relative z-10 w-64 md:w-80 h-auto object-cover grayscale hover:grayscale-0 transition duration-500 border-2 border-black"
        />
      </div>

    </section>
  );
}

export default Hero;