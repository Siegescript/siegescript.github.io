const SKILLS = [
    {id:"c", name:"c"},
    {id:"java", name:"java"},
    {id:"js", name:"javascript"},
    {id:"py", name:"python"},
    {id:"react", name:"reactjs"},
    {id:"nodejs", name:"nodejs"},
    {id:"mysql", name:"mysql"},
    {id:"git", name:"git"},
];

function Skills(){
    return(
        <section id='skills' className="py-20 max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-2xl font-bold text-[#cb6ce6]">&gt;skills</h2>
                <div className="h-[1px] flex-grow bg-linear-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            {/*Grid*/}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto justify-items-center">
                {
                SKILLS.map((skill)=>(
                    <div
                        key={skill.id}
                        className="border border-gray-700 bg-black p-6 w-32 h-32 flex flex-col items-center justify-center gap-3 transition-colors hover:border-[#cb6ce6]/50 group"
                    >
                    {/*Fetching skillicons.dev*/}
                        <img
                            src={`https://skillicons.dev/icons?i=${skill.id}`}
                            alt={`${skill.name} icon`}
                            className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="text-xs text-gray-400 font-mono group-hover:text-white">
                            {skill.name}
                        </span>
                    </div>
                ))
                }
            </div>
        </section>
    );
}

export default Skills;