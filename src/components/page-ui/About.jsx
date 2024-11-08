import { useEffect, useState } from "react";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setInView(isInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="h-screen flex justify-center dark:bg-black bg-white dark:text-white font-poppins py-20 transition-all duration-500"
    >
      <div
        className={`container flex flex-col justify-between items-center dark:text-white text-black h-full transition-all duration-500 transform ${
          inView ? "opacity-100 -translate-y-0 duration-700" : "opacity-0 -translate-y-20 duration-5000"
        }`}
      >
        <div>
          <h1 className="text-4xl text-[#cf1b1b] font-extrabold text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">
            About
          </h1>
        </div>
        <div className="container my-20 px-40 flex flex-col justify-between md:flex-row items-center gap-20">
          <div className="w-5/12 flex justify-center">
            <img
              src="/images/me/mehdiP.jpg"
              alt="Mehdi"
              className="rounded-lg shadow-lg w-3/4 h-3/4 object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-left font-bold">
            <h3 className="text-3xl font-bold mb-4">Hello</h3>
            <p className="text-xl font-semibold leading-relaxed">
              Master&apos;s student in Full Stack Development, I am looking for a one-year work-study position for the 2024/2025 academic year to further develop my skills in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
