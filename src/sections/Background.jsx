import React from "react";
import photo from "../assets/portrait.jpeg";

function Background() {
    return (
        <section id="background" className="py-20 max-w-5xl mx-auto px-6">
            {/* Terminal style heading */}
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-[#cb6ce6]">&gt;background</h2>
                <div className="h-[1px] flex-grow bg-linear-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed">
                    <p>
                    I’m a computer science graduate from the 
                    University of San Carlos with hands-on experience 
                    in software development and a foundation in 
                    C, Java, JavaScript, Python, and SQL.
                    </p>
                    <p>
                    I aspire to be a developer who can build projects, 
                    write clean code, while also learn new technologies. 
                    Furthermore, I am eager to apply a collaborative and 
                    analytical approach to technology challenges and 
                    contribute to team success.
                    </p>

                    {/* Subsections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                        <div>
                            <h3 className="text-xl font-bold text-[#cb6ce6] mb-2">&gt;education</h3>
                            <p className="font-bold">University of San Carlos</p>
                            <p className="text-sm text-gray-400">BS. Computer Science</p>
                            <p className="text-sm text-gray-400">Aug 2022 - May 2026</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#cb6ce6] mb-2">&gt;employment</h3>
                            <p className="font-bold">Cebu Landmasters Inc.</p>
                            <p className="text-sm text-gray-400">Digital Innovations Intern</p>
                            <p className="text-sm text-gray-400">Sep 2025 - Jan 2026</p>
                        </div>
                    </div>
                </div>

                {/* Right Graphic Column */}
                <div className="flex flex-col items-center justify-start space-y-4">
                    <img 
                        src={photo} 
                        alt="Stefan Louis portrait" 
                        className="w-48 h-auto object-cover grayscale hover:grayscale-0 transition duration-500"
                    />
                    <div className="border border-gray-700 p-3 flex items-center gap-3 text-xs bg-black w-48 justify-center">
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