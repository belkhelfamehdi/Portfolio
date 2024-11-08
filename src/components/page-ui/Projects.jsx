import { useState, useEffect } from 'react';

const Projects = () => {
    const projectCard = "flex justify-center items-center rounded-lg shadow-lg transition-all duration-500 overflow-hidden";
    const image = "rounded-md w-full h-full max-md:p-4 hover:scale-110 transition-all duration-500";

    const [inView, setInView] = useState(Array(6).fill(false)); // Initialize inView state for each project

    useEffect(() => {
        const handleScroll = () => {
            const newInView = inView.map((item, index) => {
                const element = document.getElementById(`project-${index}`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= window.innerHeight && rect.bottom >= 0;
                }
                return item;
            });
            setInView(newInView);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="projects" className="min-h-screen flex justify-center dark:bg-black bg-white dark:text-white font-poppins transition-all duration-500">
            <div className="md:container flex flex-col items-center justify-between">
                <h2 className="text-4xl text-[#cf1b1b] font-extrabold mb-10 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 md:gap-12 w-full md:px-10">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            id={`project-${index}`}
                            className={`${projectCard} ${inView[index] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <a href="https://github.com/belkhelfamehdi/Library-Management-WebApp" target="_blank" rel="noreferrer">
                                <img src="/images/projects/clinical.png" alt={`Project ${index + 1}`} className={image} />
                            </a>
                        </div>
                    ))}
                </div>
                <button className="my-20 px-14 py-4 bg-[#cf1b1b] text-white text-xl font-bold rounded-xl">
                    <a href="https://drive.google.com/file/d/1JA_tVcGv0x6NxdahaItfm1WDMzqktliH/view?usp=sharing" target="_blank" rel="noreferrer">
                        Download CV
                    </a>
                </button>
            </div>
        </section>
    );
};

export default Projects;
