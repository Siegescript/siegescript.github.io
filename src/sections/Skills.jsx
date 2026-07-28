import React from "react";
import portfolioData from "../data.json"

function Skills(){
    return(
        <section id='skills' className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; skills</h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
                {portfolioData.skills.map((skill) => (
                <div 
                    key={skill.id} 
                    className="border border-gray-700 bg-black p-6 w-full h-36 flex flex-col items-center justify-center gap-3 transition-colors hover:border-[#cb6ce6] group"
                >
                    <img 
                        src={`https://skillicons.dev/icons?i=${skill.id}`} 
                        alt={`${skill.name} icon`}
                        className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-xs text-gray-400 font-mono group-hover:text-white">
                        {skill.name}
                    </span>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;