import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPostgresql } from "react-icons/si";

const Skills = () => {
    const skills = [
        { icon: <SiTailwindcss />, name: 'Tailwind' },
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <FaJava />, name: 'Spring Boot' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
    ];

    const [inView, setInView] = useState(Array(skills.length).fill(false));

    useEffect(() => {
        const handleScroll = () => {
            const newInView = inView.map((item, index) => {
                const element = document.getElementById(`skill-${index}`);
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
    }, [inView]);

    const cardBase = "flex justify-center items-center border-b-[6px] border-red-600 pb-1 transition-all duration-500";
    const iconBase = "text-5xl mb-1 p-2 dark:text-white text-black transition-all duration-500";
    const textBase = "text-2xl font-semibold dark:text-white text-black transition-all duration-500";

    return (
        <section id="about" className="flex justify-center dark:bg-black bg-white font-poppins transition-all duration-500">
            <div className="container flex flex-col space-y-10 items-center text-white py-28 px-28">
                <div>
                    <h1 className="text-4xl text-[#cf1b1b] font-extrabold text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">Skills</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-10 text-center px-16 pb-10">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            id={`skill-${index}`}
                            className={`${cardBase} ${inView[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
