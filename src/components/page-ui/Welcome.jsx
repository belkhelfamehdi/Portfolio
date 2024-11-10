// WelcomePage.js
import { useState, useEffect } from 'react';

const Welcome = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full bg-[#1f1f1f] flex justify-center items-center transform transition-transform duration-1000 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="text-white text-center text-4xl font-bold">
        Welcome!
      </div>
    </div>
  );
};

export default Welcome;
