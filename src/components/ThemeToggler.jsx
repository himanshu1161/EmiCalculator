import React from 'react';

function ThemeToggler({ theme, toggleTheme }) {
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 text-sm font-medium bg-gray-300 rounded focus:outline-none">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ThemeToggler;
