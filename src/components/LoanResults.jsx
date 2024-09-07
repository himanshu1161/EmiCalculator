import React from 'react';

function LoanResults({ results, theme }) {
  const { EMI, totalInterest, totalAmount } = results;

  return (
    <div className={`p-4 rounded shadow-md max-w-lg mx-auto mt-4 space-y-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}`}>
      <h2 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>Loan Results</h2>

      <div className="text-lg">
        <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}><strong>EMI:</strong> {EMI.toFixed(2)}</p>
        <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}><strong>Total Interest Payable:</strong> {totalInterest.toFixed(2)}</p>
        <p className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}><strong>Total Amount Payable:</strong> {totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default LoanResults;
