import { useState, useEffect } from 'react';
import { MoonIcon } from '@radix-ui/react-icons';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <MoonIcon className='h-8 w-8 text-black'/> : <MoonIcon className='h-8 w-8 text-white'/>}
        </button>
    );
};

export default DarkModeToggle;
