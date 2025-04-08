import { useState, useEffect } from 'react';
import { MoonIcon } from '@radix-ui/react-icons';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);
    
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);
    
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <MoonIcon className='h-8 w-8 text-white'/> : <MoonIcon className='h-8 w-8 text-black'/>}
        </button>
    );
};

export default DarkModeToggle;
