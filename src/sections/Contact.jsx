import { Mail } from "lucide-react";
import { Download } from "lucide-react";
import Resume from "../assets/StefanLouis_Duran_CV.pdf";
import data from "../data.json";

function Contact(){
    const renderIcon = (iconName) => {
        if(iconName === "email"){
            return <Mail aria-hidden="true" className="w-8 h-8" strokeWidth={1.5} />
        }

        return (
            <img 
                src={`https://skillicons.dev/icons?i=${iconName}`} 
                alt="" 
                aria-hidden="true" 
                className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all" 
            />
        );
    };

    return(
        <section id="contact" className="py-24 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-8 md:px-12 mb-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#cb6ce6]">&gt; contact</h2>
                <div className="h-px grow bg-linear-to-r from-[#cb6ce6]/50 to-transparent"/>
            </div>

            <div className="max-w-4xl 2xl:max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 px-4">

                {/*Social Links*/}
                <div className="space-y-6">
                    {data.socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target={link.name === "Email" ? undefined : "_blank"}
                            rel={link.name === "Email" ? undefined : "noopener noreferrer"}
                            className="flex items-center gap-6 text-gray-300 hover:text-white transition-colors group"
                        >
                            {renderIcon(link.iconName)}
                            <span className="text-lg md:text-xl font-mono">{link.name}</span>
                        </a>
                    ))}
                </div>

                {/*Resume Button*/}
                <div>
                    <a href={Resume} download="StefanLouis_Duran_CV.pdf" className="border border-gray-500 hover:border-white text-white px-8 py-3 flex items-center gap-3 transition-colors text-base md:text-lg font-mono">
                        Resume
                        <Download/>
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