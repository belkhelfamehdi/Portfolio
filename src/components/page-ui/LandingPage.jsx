import { Typewriter } from 'react-simple-typewriter';
import Background from "../ui/Background";
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import '../../index.css';

const LandingPage = () => {
    return (
        <section id='home' className="h-screen flex justify-center font-poppins dark:bg-transparent max-lg:pt-20 max-md:pt-20 max-md:dark:bg-black bg-white transition-colors duration-500">
            <div className="container relative flex flex-col lg:flex-row items-center justify-center lg:justify-between dark:text-white text-black px-6 md:px-12 lg:px-24 transition-colors duration-500">
                
                <div className="relative z-10 text-center lg:text-left lg:py-8 mb-8 lg:mb-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        Hi, <span className='block pt-2'>I&apos;m <span className="text-[#cf1b1b]">Mehdi</span></span>
                    </h1>
                    <h1 className="flex justify-center lg:justify-start items-start pt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold min-h-20 lg:min-h-28 mb-0 lg:mb-11">
                        <Typewriter
                            words={["React.js Developer", "Java Developer", "Anime Fan"]}
                            loop={true}
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                        <span className='bg-current animate-blink w-2 md:w-2 text-3xl md:text-4xl lg:text-5xl mt-1 '>&nbsp;</span>
                    </h1>
                        <a href='#contact'>
                            <button className="mt-4 px-8 md:px-8 lg:px-11 py-3 md:py-3 bg-[#cf1b1b] border border-[#cf1b1b] hover:bg-white hover:text-[#cf1b1b] text-white text-md md:text-md font-bold rounded-xl transition-all duration-150">
                                Contact
                            </button>
                        </a>

                    <div className="flex justify-center lg:justify-start space-x-4 lg:mt-20 mt-7">
                        <a href="https://www.linkedin.com/in/mehdi-belkhelfa-02b7a82b0/" target="_blank" rel="noreferrer">
                            <LinkedInLogoIcon className="w-5 h-5 md:w-7 md:h-7 dark:text-white text-black dark:hover:text-[#cf1b1b] hover:text-[#cf1b1b] transition-all duration-200" />
                        </a>
                        <a href="https://github.com/belkhelfamehdi/" target="_blank" rel="noreferrer">
                            <GitHubLogoIcon className="w-5 h-5 md:w-7 md:h-7 dark:text-white text-black dark:hover:text-[#cf1b1b] hover:text-[#cf1b1b] transition-all duration-200" />
                        </a>
                    </div>
                </div>

                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden shadow-xl border-4 border-[#cf1b1b]">
                    <img src="./images/me/mehdi.jpg" className="object-cover w-full h-full" alt="Mehdi" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                </div>
            </div>
            <Background id="particle" />
        </section>
    );
};

export default LandingPage;
