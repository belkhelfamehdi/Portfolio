import { Link } from 'react-router-dom';

const NavLinks = () => {

    const link = "relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:-my-3 after:bg-red-500 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"

    return (
        <ul className="flex space-x-10 font-poppins text-xl font-bold text-black dark:text-white transition-colors duration-300">
            <li><Link to="/home" className={link}>Home</Link></li>
            <li><Link to="#about" className={link}>About</Link></li>
            <li><Link to="/skills" className={link}>Skills</Link></li>
            <li><Link to="/projects" className={link}>Projects</Link></li>
            <li><Link to="/contact" className={link}>Contact</Link></li>
        </ul>
    );
};

export default NavLinks;
