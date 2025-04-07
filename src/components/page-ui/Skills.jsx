import { useState, useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaJava, FaAngular, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPostgresql } from "react-icons/si";

const Skills = () => {
    const skills = [
        { icon: <SiTailwindcss />, name: 'Tailwind' },
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <FaJava />, name: 'Spring Boot' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
        { icon: <FaAngular />, name: 'Angular' },
        { icon: <FaLaravel />, name: 'Laravel' },
    ];

    const skillRefs = useRef([]);
    const [inView, setInView] = useState(Array(skills.length).fill(false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = skillRefs.current.indexOf(entry.target);
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

        skillRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            skillRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, [inView]);

    const cardBase = "flex justify-center items-center border-b-[3px] border-red-600 pb-1 transition-all duration-700";
    const iconBase = "text-3xl mb-1 p-2 dark:text-white text-black transition-all duration-700";
    const textBase = "text-xl font-semibold dark:text-white text-black transition-all duration-700";

    return (
        <section id="skills" className="flex justify-center dark:bg-black bg-white font-poppins transition-all duration-500">
            <div className="container flex flex-col space-y-10 items-center text-white md:px-28">
                <div>
                    <h1 className="text-3xl text-[#cf1b1b] font-extrabold text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">Skills</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-10 text-center px-16 pb-10">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            ref={(el) => (skillRefs.current[index] = el)}
                            className={`${cardBase} ${inView[index] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className={iconBase}>{skill.icon}</div>
                            <p className={textBase}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
