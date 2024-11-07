import { Typewriter } from 'react-simple-typewriter';
import Background from "../ui/Background"
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

const LandingPage = () => {

    return (
        <section id='home' className="h-screen flex justify-center font-poppins dark:bg-transparent bg-white  transition-colors duration-500">
            <div className='container relative flex items-center justify-between dark:text-white text-black px-24 transition-colors duration-500'>
                <div className="relative z-10 text-left">
                    <h1 className="text-7xl font-extrabold leading-normal">
                        Hi, <br/>I&apos;m <span className="text-[#cf1b1b]">Mehdi</span>
                    </h1>
                    <h1 className="flex items-center text-7xl font-extrabold leading-normal min-h-28 mb-11">
                        <Typewriter
                            words={["React.js Developer", "Java Developer", "Anime Fan"]}
                            loop={true}
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                        <span className='bg-current animate-blink w-4 text-7xl mt-3'>&nbsp;</span>
                    </h1>
                    <button className="mt-4 px-14 py-4 bg-[#cf1b1b] text-white text-xl font-bold rounded-xl">
                        Contact
                    </button>

                    <div className="absolute left-0 flex space-x-4 my-20">
                        <a href="https://www.linkedin.com/in/mehdi-belkhelfa-02b7a82b0/" target="_blank" rel="noreferrer">
                            <LinkedInLogoIcon className="w-8 h-8 dark:text-white text-black dark:hover:text-[#cf1b1b] hover:text-[#cf1b1b] transition-all duration-200" />
                        </a>
                        <a href="https://github.com/belkhelfamehdi/" target="_blank" rel="noreferrer">
                            <GitHubLogoIcon className="w-8 h-8 dark:text-white text-black dark:hover:text-[#cf1b1b] hover:text-[#cf1b1b] transition-all duration-200" />
                        </a>
                    </div>
                </div>
                <div>
                    <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden shadow-xl border-4 border-[#cf1b1b]">
                        <img src="/images/me/mehdi.jpg" className="object-cover w-full h-full" alt="Mehdi" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                    </div>
                </div>
            </div>
            <Background id="particle" />
        </section>
        
    );
};

export default LandingPage;
