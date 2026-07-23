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
        <section id="projects" className="py-20 max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl font-bold text-[#cb6ce6]">&gt;projects</h2>
                <div className="h-[1px] flex-grow bg-linear-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                PROJECT_DATA.map((project, index) => (
                    <div key={index} className="border border-gray-700 font-mono bg-black text-left">
                        <div className="border-b border-gray-700 p-6 flex flex-col items-center justify-center min-h-[150px]">
                            <span className="text-lg mb-2">Loading...</span>
                            <div className="w-full border border-gray-500 h-6 p-[2px] flex gap-[2px]">
                                {[...Array(7)].map((_, i) => <div key={i} className="bg-white w-4 h-full" />)}
                                {[...Array(6)].map((_, i) => <div key={i} className="bg-neutral-800 w-4 h-full" />)}
                            </div>
                        </div>
                        <div className="border-b border-gray-700 px-4 py-2 text-sm text-gray-400">
                            {project.stack}
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-white mb-1">{project.title}</h3>
                            <p className="text-xs text-gray-400">{project.description}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>
    );
}

export default Projects;