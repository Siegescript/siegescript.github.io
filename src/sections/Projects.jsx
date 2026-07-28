import React from "react";
import ProjectCard from "../components/ProjectCard";
import portfolioData from "../data.json";

function Projects() {
    const isInitialState = portfolioData.projects.length === 1;

    return(
        <section id="projects" className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; projects</h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            {/* Dynamically swaps between Flex Center (1 item) and Grid Layout (2+ items) */}
            <div className={
                isInitialState 
                    ? "flex justify-center" 
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
            }>
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className={isInitialState ? "w-full max-w-md" : ""}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;