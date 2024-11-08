const NavLinks = () => {

    const link = "relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:-my-3 after:bg-red-500 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"

    return (
        <ul className="flex space-x-10 font-poppins text-xl font-bold text-black dark:text-white transition-colors duration-300">
            <li><a href="#home" className={link}>Home</a></li>
            <li><a href="#about" className={link}>About</a></li>
            <li><a href="#skills" className={link}>Skills</a></li>
            <li><a href="#projects" className={link}>Projects</a></li>
            <li><a href="#contact" className={link}>Contact</a></li>
        </ul>
    );
};

export default NavLinks;
