import React, { useState } from 'react';
import LoanForm from './components/LoanForm';
import LoanResults from './components/LoanResults';
import ThemeToggler from './components/ThemeToggler';
import { calculateEMI } from './utils/calculateEMI';

function App() {
  const [loanResults, setLoanResults] = useState(null);
  const [theme, setTheme] = useState('light');

  const handleFormSubmit = (loanDetails) => {
    const results = calculateEMI(loanDetails);
    setLoanResults(results);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen p-6 ${theme === 'light' ? 'bg-gray-50 text-black' : 'bg-gray-800 text-white'}`}>
      <div className="flex justify-between items-center mb-4">
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        {loanResults && (
          <button 
            onClick={handlePrint} 
            className={`p-2 rounded ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-gray-100'}`}>
            Print EMI Breakdown
          </button>
        )}
      </div>

      <LoanForm onSubmit={handleFormSubmit} theme={theme} />
      {loanResults && <LoanResults results={loanResults} theme={theme} />}
    </div>
  );
}

export default App;
