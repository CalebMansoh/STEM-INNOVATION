import { useState } from 'react';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <button onClick={toggleDarkMode} className="flex items-center justify-center w-8 h-8 rounded-full hover:border-none md:-ml-6  duration-700 ease-in-out">
      {darkMode ? (
        <AiFillSun   className="text-4xl md:text-2xl text-white duration-700 ease-in-out" />
      ) : (
        <AiFillMoon className="text-slate-700 duration-700 ease-in-out text-4xl md:text-2xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
