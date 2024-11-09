import { Typewriter } from 'react-simple-typewriter';
import Background from "../ui/Background";
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import '../../index.css';

const LandingPage = () => {
    return (
        <section id='home' className="h-screen flex justify-center font-poppins dark:bg-transparent max-md:dark:bg-black bg-white transition-colors duration-500">
            <div className="container relative flex flex-col lg:flex-row items-center lg:justify-between dark:text-white text-black px-6 md:px-12 lg:px-24 transition-colors duration-500">
                
                {/* Text Content */}
                <div className="relative z-10 text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight lg:leading-normal">
                        Hi, <br />I&apos;m <span className="text-[#cf1b1b]">Mehdi</span>
                    </h1>
                    <h1 className="flex justify-center lg:justify-start items-center text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight lg:leading-normal min-h-20 lg:min-h-28 mb-8 lg:mb-11">
                        <Typewriter
                            words={["React.js Developer", "Java Developer", "Anime Fan"]}
                            loop={true}
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                        <span className='bg-current animate-blink w-3 md:w-4 text-3xl md:text-5xl lg:text-7xl mt-1 lg:mt-3'>&nbsp;</span>
                    </h1>
                    <button className="mt-4 px-8 md:px-10 lg:px-14 py-3 md:py-4 bg-[#cf1b1b] text-white text-lg md:text-xl font-bold rounded-xl">
                        Contact
                    </button>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-4 mt-8">
                        <a href="https://www.linkedin.com/in/mehdi-belkhelfa-02b7a82b0/" target="_blank" rel="noreferrer">
                            <LinkedInLogoIcon className="w-6 h-6 md:w-8 md:h-8 dark:text-white text-black dark:hover:text-[#cf1b1b] hover:text-[#cf1b1b] transition-all duration-200" />
                        </a>
                        <a href="https://github.com/belkhelfamehdi/" target="_blank" rel="noreferrer">
                            <GitHubLogoIcon className="w-6 h-6 md:w-8 md:h-8 dark:text-white text-black dark:hover:text-[#cf1b1b] hover:text-[#cf1b1b] transition-all duration-200" />
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden shadow-xl border-4 border-[#cf1b1b]">
                    <img src="/images/me/mehdi.jpg" className="object-cover w-full h-full" alt="Mehdi" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                </div>
            </div>
            <Background id="particle" />
        </section>
    );
};

export default LandingPage;
