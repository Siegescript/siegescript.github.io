import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground(){
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(()=>{
            setInit(true);
        });
    }, []);

    if(!init) return null;

    return(
        <Particles
            id="tsparticles"
            className="absolute inset-0 -z-10 pointer-events-none"
            options={{
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                    },
                    modes: {
                        grab: { distance: 150, links: { opacity: 0.4 } },
                    },
                },
                particles: {
                    color: { value: "#cb6ce6" },
                    links: {
                        color: "#cb6ce6",
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.8, // Slow, ambient movement
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: { default: "bounce" },
                    },
                    number: {
                        value: 40, // Keeps it sparse and non-distracting
                        density: { enable: true, bounds: { width: 1920, height: 1080 } },
                    },
                    opacity: { value: { min: 0.1, max: 0.4 } },
                    shape: { type: "polygon", options: { polygon: { sides: 6 } } }, // Hexagonal node links
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
}

export default ParticleBackground;