const Projects = () => {
    const projectCard = "flex justify-center items-center rounded-lg shadow-lg transition-all duration-500 overflow-hidden";
    const image = "rounded-md w-full h-full hover:scale-110 transition-all duration-1000";
    
    return (
      <section id="projects" className="min-h-screen flex justify-center dark:bg-black bg-white dark:text-white font-poppins py-20 transition-all duration-500">
        <div className="container flex flex-col items-center justify-between">
          <h2 className="text-4xl text-[#cf1b1b] font-extrabold mb-10 text-center relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[4px] after:-my-3 after:bg-[#cf1b1b] after:bottom-0 after:w-3/4">
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-12 w-full px-10">
            {/* Project 1 */}
            <div className={projectCard}>
                <a href="https://github.com/belkhelfamehdi/Library-Management-WebApp" target="_blank" rel="noreferrer">
                    <img src="/images/projects/clinical.png" alt="Project 1" className={image} />
                </a>
            </div>
            {/* Project 2 */}
            <div className={projectCard}>
                <a href="https://github.com/belkhelfamehdi/Library-Management-WebApp" target="_blank" rel="noreferrer">
                    <img src="/images/projects/clinical.png" alt="Project 1" className={image} />
                </a>
            </div>
            {/* Project 3 */}
            <div className={projectCard}>
                <a href="https://github.com/belkhelfamehdi/Library-Management-WebApp" target="_blank" rel="noreferrer">
                    <img src="/images/projects/clinical.png" alt="Project 1" className={image} />
                </a>
            </div>
            {/* Project 4 */}
            <div className={projectCard}>
                <a href="https://github.com/belkhelfamehdi/Library-Management-WebApp" target="_blank" rel="noreferrer">
                    <img src="/images/projects/clinical.png" alt="Project 1" className={image} />
                </a>
            </div>
            {/* Project 5 */}
            <div className={projectCard}>
                <a href="https://github.com/belkhelfamehdi/Library-Management-WebApp" target="_blank" rel="noreferrer">
                    <img src="/images/projects/clinical.png" alt="Project 1" className={image} />
                </a>
            </div>
            {/* Project 6 */}
            <div className={projectCard}>
                <a href="https://github.com/belkhelfamehdi/Library-Management-WebApp" target="_blank" rel="noreferrer">
                    <img src="/images/projects/clinical.png" alt="Project 1" className={image} />
                </a>
            </div>
          </div>
          <button className="my-20 px-14 py-4 bg-[#cf1b1b] text-white text-xl font-bold rounded-xl">
            <a href="https://drive.google.com/file/d/1JA_tVcGv0x6NxdahaItfm1WDMzqktliH/view?usp=sharing" target="_blank" rel="noreferrer">
                Download CV
            </a>
          </button>
        </div>
      </section>
    );
  };
  
  export default Projects;
  