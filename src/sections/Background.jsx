import React from "react";
import photo from "../assets/portrait.jpeg";

function Background() {
    return (
        <section id="background" className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12">
            
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; background</h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>
                    I'm a computer science graduate from the University of San Carlos with hands-on experience in software development and a foundation in C, Java, JavaScript, Python, and SQL.
                    </p>
                    <p>
                    I aspire to be a developer who can build projects, write clean code, while also learn new technologies. Furthermore, I am eager to apply a collaborative and analytical approach to technology challenges and contribute to team success.
                    </p>
          
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-[#cb6ce6] mb-2">&gt;education</h3>
                            <p className="font-bold text-white text-base md:text-lg">University of San Carlos</p>
                            <p className="text-gray-400">BS. Computer Science,</p>
                            <p className="text-gray-500 text-xs md:text-sm">Aug 2022 - May 2026</p>
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-[#cb6ce6] mb-2">&gt;employment</h3>
                            <p className="font-bold text-white text-base md:text-lg">Cebu Landmasters Inc.</p>
                            <p className="text-gray-400">Digital Innovations Intern,</p>
                            <p className="text-gray-500 text-xs md:text-sm">Sep 2025 - Jan 2026</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start space-y-6">
                    <img 
                        src={photo} 
                        alt="Stefan Louis portrait" 
                        className="w-56 h-auto 2xl:w-64 2xl:h-auto object-cover border border-gray-700 grayscale hover:grayscale-0 transition duration-500"
                    />
                    <div className="border border-gray-700 p-3 flex items-center gap-3 text-2xs md:text-xs bg-black w-56 2xl:w-64 justify-center">
                        <div className="relative w-4 h-4">
                            <span className="absolute top-0 left-0 w-3 h-3 bg-cyan-400 z-10"></span>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-pink-500 z-0"></span>
                        </div>
                        <span>Working on: <span className="text-white">Web Portfolio</span></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Background;