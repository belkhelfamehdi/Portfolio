import { useState, useEffect, useRef } from 'react';

const Projects = () => {
    const projectCard = "flex justify-center items-center rounded-lg shadow-lg transition-all duration-500 overflow-hidden";
    const image = "rounded-md max-sm:rounded-lg w-96 h-52 max-md:p-4";

    const projectRefs = useRef([]);
    const projects = [
        {
            name: "Library Management WebApp",
            image: "./images/projects/library.png",
            description: "A web application for managing a library's collection of books.",
            link: "https://github.com/belkhelfamehdi/Library-Management-WebApp",
        },
        {
            name: "HardSpace",
            image: "./images/projects/hardspace.png",
            description: "A simple to-do list application with a dark mode.",
            link: "https://github.com/belkhelfamehdi/E-commerce-HardSpace",
        },
        {
            "name": "Library Management Desktop",
            "image": "./images/projects/library-javafx.png",
            "description": "A simple e-commerce website with a shopping cart.",
            "link": "https://github.com/belkhelfamehdi/Library-Management",
        },
        {
            name: "Master Production Schedule",
            image: "./images/projects/mps.jpg",
            description: "A desktop application for managing a library's collection of books.",
            link: "https://github.com/belkhelfamehdi/Master-Production-Schedule",
        },
        {
            name: "E-commerce HardSpace",
            image: "./images/projects/clinique.png",
            description: "A simple e-commerce website with a shopping cart.",
            link: "https://github.com/belkhelfamehdi/clinical-management",
        }
    ]
    const [inView, setInView] = useState(Array(6).fill(false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = projectRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting && index !== -1) {
                        setInView((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        projectRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            projectRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <section id="projects" className="flex justify-center dark:bg-black bg-white dark:text-white font-poppins transition-all duration-500">
            <div className="md:container flex flex-col items-center">
                <h2 className="text-3xl text-[#cf1b1b] font-extrabold mb-10 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 md:gap-14 w-full lg:pt-10 md:px-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className={`${projectCard} ${inView[index] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <a className='relative' href={`${project.link}`} target="_blank" rel="noreferrer">
                                <img src={`${project.image}`} alt={`Project ${index + 1}`} className={image} />
                                <div className="absolute inset-0 bg-black bg-opacity-50 px-4 flex flex-col space-y-3 justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500">
                                    <p className="text-white text-center text-lg font-bold">{project.name}</p>
                                    <p className='text-white text-center text-md font-thin'>{project.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <a href="https://drive.google.com/file/d/1VS40vxJBE5bDKVXAyXz2Lf7G7NyTvb1D/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button className="my-20 px-8 py-3 bg-[#cf1b1b] border border-[#cf1b1b] hover:bg-white hover:text-[#cf1b1b] text-white text-sm font-bold rounded-xl transition-all duration-150">
                        Download CV
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Projects;
