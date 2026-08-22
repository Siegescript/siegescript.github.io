import { Mail } from "lucide-react";
import Resume from "../assets/StefanLouis_Duran_CV.pdf";

function Contact(){
    return(
        <section id="contact" className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12 mb-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; contact</h2>
                <div className="h-px grow bg-linear-to-r from-[#cb6ce6]/50 to-transparent"/>
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
                    <a href="https://www.linkedin.com/in/siegescript/" target="_blank" rel="noreferrer" className="flex items-center gap-6 text-gray-300 hover:text-white transition-colors group">
                        <img src="https://skillicons.dev/icons?i=linkedin" alt="Linkedin" className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all" />
                        <span className="text-lg md:text-xl font-mono">Linkedin</span>
                    </a>
                    <a href="mailto:stefanlouisduran@gmail.com" className="flex items-center gap-6 text-gray-300 hover:text-white transition-colors">
                        <Mail aria-hidden="true" className="w-8 h-8" strokeWidth={1.5} />
                        <span className="text-lg md:text-xl font-mono">Email</span>
                    </a>
                </div>

                {/*Resume Button*/}
                <div>
                    <a href={Resume} download="StefanLouis_Duran_CV.pdf" className="border border-gray-500 hover:border-white text-white px-8 py-3 flex items-center gap-3 transition-colors text-base md:text-lg font-mono">
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

                    <p className="text-white text-md md:text-lg leading-relaxed">
                        An idiot admires complexity, a genius admires simplicity.
                    </p>                

                    {/*Name Tag*/}
                    <div className="absolute -bottom-5 right-20 bg-black border border-gray-600 px-3 py-2 z-0">
                        <p className="text-white text-s">Terry A. Davis</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;