import { useEffect, useRef, useState } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = aboutRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="flex justify-center dark:bg-black bg-white dark:text-white font-poppins py-10 lg:py-10 transition-all duration-500"
    >
      <div
        className={`container flex flex-col items-center dark:text-white text-black h-full transition-all duration-500 transform ${
          inView ? "opacity-100 -translate-y-0 duration-1000" : "opacity-0 -translate-y-20 duration-5000"
        }`}
      >
        <div>
          <h1 className="text-3xl text-[#cf1b1b] font-extrabold text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">
            About
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 w-full max-w-6xl px-4 md:px-10 lg:px-20 my-16">
          <div className="w-full md:w-5/12 flex justify-center">
            <img
              src="./images/me/mehdiP.jpg"
              alt="Mehdi"
              className="rounded-lg shadow-lg w-2/4 md:w-3/4 h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-7/12 font-bold">
            <h3 className="text-xl max-md:text-center md:text-2xl font-bold mb-4">Hello</h3>
            <p className="text-md md:text-lg text-left font-semibold leading-relaxed">
              Master&apos;s student in Full Stack Development, I am looking for a one-year work-study position for the 2024/2025 academic year to further develop my skills in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
