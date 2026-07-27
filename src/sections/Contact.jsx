import Resume from "../assets/Resume.pdf";

function Contact(){
    return(
        <section id="contact" className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12 mb-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; contact</h2>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-[#cb6ce6]/50 to-transparent"/>
            </div>

            <div className="max-w-4xl 2xl:max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 px-4">

                {/*Social Links*/}
                <div className="space-y-6">
                    <a href="https://github.com/Siegescript" target="_blank" rel="noreferrer" className="flex items-center gap-6 text-gray-300 hover:text-white transition-colors group">
                        <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all" />
                        <span className="text-lg md:text-xl font-mono">Github</span>
                    </a>
                    <a href="https://twitter.com/stefan_lou4099" target="_blank" rel="noreferrer" className="flex items-center gap-6 text-gray-300 hover:text-white transition-colors group">
                        <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter" className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all" />
                        <span className="text-lg md:text-xl font-mono">Twitter / X</span>
                    </a>
                    <a href="mailto:sean.s.l.duran@gmail.com" className="flex items-center gap-6 text-gray-300 hover:text-white transition-colors group">
                        <svg className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-lg md:text-xl font-mono">Email</span>
                    </a>
                </div>

                {/*Resume Button*/}
                <div>
                    <a href={Resume} download="resume.pdf" className="border border-gray-500 hover:border-white text-white px-8 py-3 flex items-center gap-3 transition-colors text-base md:text-lg font-mono">
                        Resume
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>
            </div>

            {/*Quote Box*/}
            <div className="mt-32 flex justify-center px-4">
                <div className="border border-gray-600 p-8 relative max-w-xl w-full">
                    {/*Top Quote Mark*/}
                    <span className="absolute -top-6 left-6 bg-black px-2 text-5xl text-white font-serif">"</span>

                    <p className="text-white text-md md:text-lg mb-6 leading-relaxed">
                        An idiot admires complexity, a genius admires simplicity.
                    </p>

                    {/*Bottom Quote Mark*/}
                    <span className="absolute -bottom-6 right-6 bg-black px-2 text-5xl text-white font-serif z-10">"</span>                  

                    {/*Name Tag*/}
                    <div className="absolute -bottom-5 right-20 bg-black border border-gray-600 px-4 py-1 z-0">
                        <p className="text-white text-xs">Terry A. Davis</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;