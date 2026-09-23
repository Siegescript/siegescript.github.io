import portfolioData from "../data.json";
import portrait from "../assets/portrait.jpg";

function Background() {
    const { about, education, employment, currentWork } = portfolioData;

    return (
        <section id="background" className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12">
            
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; background</h2>
                <div className="h-px grow bg-linear-to-r from-[#cb6ce6]/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                    {about.map((item, index) => (
                        <p key={index}>{item.paragraph}</p>
                    ))}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-[#cb6ce6] mb-2">&gt; education</h3>
                            {education.map((item, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                                <p className="font-bold text-white text-base md:text-lg">{item.institution}</p>
                                <p className="text-gray-400">{item.degree}</p>
                                <p className="text-gray-400 text-xs md:text-sm">{item.date}</p>
                            </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-[#cb6ce6] mb-2">&gt; employment</h3>
                            {employment.map((item, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                                <p className="font-bold text-white text-base md:text-lg">{item.company}</p>
                                <p className="text-gray-400">{item.role}</p>
                                <p className="text-gray-400 text-xs md:text-sm">{item.date}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start space-y-6">
                    <img 
                        src={portrait} 
                        alt="Stefan Louis portrait" 
                        className="w-56 h-auto 2xl:w-64 2xl:h-auto object-cover border border-gray-700 grayscale hover:grayscale-0 transition duration-500"
                    />
                    <div className="border border-gray-700 p-3 flex items-center gap-3 text-2xs md:text-xs bg-black w-56 2xl:w-64 justify-start">
                        <div className="relative w-4 h-4">
                            <span className="absolute top-0 left-0 w-3 h-3 bg-cyan-400 z-10"></span>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-pink-500 z-0"></span>
                        </div>
                        <span>Working on: <span className="text-white">{currentWork}</span></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Background;