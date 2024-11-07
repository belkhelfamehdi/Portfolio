import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPostgresql } from "react-icons/si";

const Skills = () => {

    const card = "flex justify-center items-center border-b-[6px] border-red-600 pb-1 transition-all duration-500"
    const icon = "text-5xl mb-1 p-2 dark:text-white text-black transition-all duration-500"
    const text = "text-2xl font-semibold dark:text-white text-black transition-all duration-500"

    return (
        <section id="about" className="h-screen flex justify-center dark:bg-black bg-white font-poppins transition-all duration-500">
            <div className="container flex flex-col justify-between items-center text-white h-full py-44 px-28">
                <div>
                    <h1 className="text-4xl text-[#cf1b1b] font-extrabold text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">Skills</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 text-center px-4 ">
                    <div className={card}>
                    <SiTailwindcss className={icon} />
                    <p className={text} >Tailwind</p>
                    </div>
                    <div className={card}>
                    <SiJavascript className={icon} />
                    <p className={text}>JavaScript</p>
                    </div>
                    <div className={card}>
                    <FaReact className={icon} />
                    <p className={text}>React</p>
                    </div>
                    <div className={card}>
                    <FaNodeJs className={icon} />
                    <p className={text}>Node.js</p>
                    </div>
                    <div className={card}>
                    <FaJava className={icon} />
                    <p className={text}>Spring Boot</p>
                    </div>
                    <div className={card}>
                    <SiPostgresql className={icon} />
                    <p className={text}>PostgreSQL</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;