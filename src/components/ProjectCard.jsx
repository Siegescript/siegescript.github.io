function ProjectCard({ project }) {
    return (
        <a
           href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="border border-gray-700 font-mono bg-black text-left flex flex-col w-full h-full min-h-80 transition-colors hover:border-[#cb6ce6] group"
        >
            {/* Top Box: Title */}
            <div className="p-6 md:p-8 min-h-30 flex items-start">
                <h3 className="font-bold text-white text-lg md:text-xl group-hover:text-[#cb6ce6] transition-colors">
                    {project.title}
                </h3>
            </div>
            {/* Middle Box: Tech / Stack */}
            <div className="border-y border-gray-700 px-6 md:px-8 py-3 text-xs md:text-sm text-gray-400">
                {project.stack}
            </div>
            {/* Bottom Box: Description */}
            <div className="p-6 md:p-8 grow">
                <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                </p>
            </div>
        </a>
    );
}

export default ProjectCard;