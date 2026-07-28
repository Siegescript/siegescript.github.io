import React from "react";

const PROJECT_DATA = [
    {
        title: "work in progress",
        stack: "unknown stack",
        description: "first project coming soon!",
        isBuilding: true
    }
];

function Projects() {
    return(
        <section id="projects" className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; projects</h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            {/* Grid scales smoothly from 1 column up to 4 columns on 2K/4K displays */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                {PROJECT_DATA.map((project, index) => (
                    <div key={index} className="border border-gray-700 font-mono bg-black text-left transition-colors hover:border-[#cb6ce6]/50">
                        <div className="border-b border-gray-700 p-8 flex flex-col items-center justify-center min-h-[180px]">
                            <span className="text-lg md:text-xl mb-3 text-gray-200">Loading...</span>
                            <div className="w-full border border-gray-500 h-6 p-[2px] flex gap-[2px]">
                                {[...Array(7)].map((_, i) => <div key={i} className="bg-white w-4 h-full" />)}
                                {[...Array(6)].map((_, i) => <div key={i} className="bg-neutral-800 w-4 h-full" />)}
                            </div>
                        </div>
                        <div className="border-b border-gray-700 px-4 py-2 text-xs md:text-sm text-gray-400">
                            {project.stack}
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-white text-base md:text-lg mb-1">{project.title}</h3>
                            <p className="text-xs md:text-sm text-gray-400">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;