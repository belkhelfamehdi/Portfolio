
const About = () => {
  return (
    <section id="about" className="h-screen flex justify-center dark:bg-black bg-white dark:text-white font-poppins py-20 transition-all duration-500">
        <div className="container flex flex-col justify-between items-center dark:text-white text-black h-full transition-all duration-500">
            <div>
                <h1 className="text-4xl text-[#cf1b1b] font-extrabold text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">About</h1>
            </div>
            <div className="container my-20 px-40 flex flex-col justify-between md:flex-row items-center gap-20">
                <div className="w-5/12 flex justify-center">
                <img
                    src="/images/mehdiP.jpg"
                    alt="Mehdi"
                    className="rounded-lg shadow-lg w-3/4 h-3/4 object-cover"
                />
                </div>

                <div className="w-full md:w-1/2 text-left font-bold">
                    <h3 className="text-3xl font-bold mb-4">Hello</h3>
                    <p className="text-xl font-semibold leading-relaxed">
                        Hardworking software engineering student from Zenica in my third and final year.
                        I&apos;m also a former Pharmacy technician and a future full stack developer.
                        I&apos;ve found my passion in web development. I love spending time coding and 
                        encountering new challenges. I&apos;m highly adaptable to new challenges and projects.
                        I&apos;m a Junior Scholar at Bosnia and Herzegovina Futures Foundation, and that is 
                        the best thing that happened to me.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;