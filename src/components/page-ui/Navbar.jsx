import Logo from '../ui/Logo';
import NavLinks from '../ui/NavLinks';
import DarkModeToggle from '../ui/DarkModeToggle';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex items-center justify-center dark:bg-[#1f1f1f] bg-white dark:shadow-[#14191b] shadow-md fixed top-0 w-full z-40 transition-all duration-500'>
            <nav className="md:container w-full flex items-center justify-between py-3 px-6 md:px-24">
                <Logo />
                {/* Desktop Links */}
                <div className="hidden sm:flex justify-between w-full items-center space-x-8">
                    <div className="sm:invisible">
                        <Logo />
                    </div>
                    <NavLinks />
                    <DarkModeToggle />
                </div>
                {/* Mobile Hamburger Menu */}
                <button className="sm:hidden z-40" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <HiX className='text-4xl dark:text-white text-black' />
                    ) : (
                        <HiMenu className='text-4xl dark:text-white text-black' />
                    )}
                </button>
            </nav>
            {/* Mobile Slide-In Menu */}
            <div
                className={`sm:hidden fixed top-0 right-0 h-full bg-white dark:bg-[#1f1f1f] shadow-lg space-y-10 py-4 px-24 z-30 transform transition-all duration-500 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <DarkModeToggle />
                <NavLinks />
            </div>
            {/* Overlay to close menu when clicking outside */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20"
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    );
};

export default Navbar;
