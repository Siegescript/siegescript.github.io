import ProjectCard from "../components/ProjectCard";
import portfolioData from "../data.json";

function Projects() {
    return(
        <section id="projects" className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; projects</h2>
                <div className="h-px grow bg-linear-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className="w-full sm:w-87.5 xl:w-95">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;