import React from "react";

function ProjectCard({ project }) {
    return (
        <div className="border border-gray-700 font-mono bg-black text-left transition-colors hover:border-[#cb6ce6]/50 w-full max-w-sm mx-auto md:max-w-none">
            {project.isBuilding ? (
                <div className="border-b border-gray-700 p-8 flex flex-col items-center justify-center min-h-[180px]">
                    <span className="text-lg md:text-xl mb-3 text-gray-200">Loading...</span>
                    <div className="w-full border border-gray-500 h-6 p-[2px] flex gap-[2px]">
                        {[...Array(7)].map((_, i) => <div key={`w-${i}`} className="bg-white w-4 h-full" />)}
                        {[...Array(6)].map((_, i) => <div key={`b-${i}`} className="bg-neutral-800 w-4 h-full" />)}
                    </div>
                </div>
            ) : (
                <div className="border-b border-gray-700 p-8 flex flex-col items-center justify-center min-h-[180px]">
                    {/* Future image/content for finished projects goes here */}
                    <span className="text-gray-500 text-sm">Project Graphic</span>
                </div>
            )}
            
            <div className="border-b border-gray-700 px-4 py-2 text-xs md:text-sm text-gray-400">
                {project.stack}
            </div>
            <div className="p-5">
                <h3 className="font-bold text-white text-base md:text-lg mb-1">{project.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;