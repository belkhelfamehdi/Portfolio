import Logo from '../ui/Logo';
import NavLinks from '../ui/NavLinks';
import DarkModeToggle from '../ui/DarkModeToggle';

const Navbar = () => {
    return (
        <div className='flex items-center justify-center dark:bg-[#1f1f1f] bg-white dark:shadow-[#14191b] shadow-md fixed top-0 w-full z-20 transition-all duration-500'>
            <nav className="container text-white flex items-center justify-between py-3 px-24">
                <Logo />
                <NavLinks />
                <DarkModeToggle />
            </nav>
        </div>
    );
};

export default Navbar;
