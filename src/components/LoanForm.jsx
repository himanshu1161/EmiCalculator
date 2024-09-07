import React, { useState } from 'react';

function LoanForm({ onSubmit, theme }) {
  const [formValues, setFormValues] = useState({
    amount: '',
    interestRate: '',
    tenure: '',
    prepayment: '',
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className={`p-4 bg-white rounded shadow-md max-w-lg mx-auto space-y-4 ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
      <h2 className="text-xl font-bold text-center">EMI Calculator</h2>
      <div className="mb-4">
        <label className={`block mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Loan Amount</label>
        <input
          type="number"
          name="amount"
          value={formValues.amount}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-800 text-white'}`}
          required
        />
      </div>
      
      <div className="mb-4">
        <label className={`block mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Interest Rate (%)</label>
        <input
          type="number"
          name="interestRate"
          value={formValues.interestRate}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-800 text-white'}`}
          required
        />
      </div>

      <div className="mb-4">
        <label className={`block mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Loan Tenure (months)</label>
        <input
          type="number"
          name="tenure"
          value={formValues.tenure}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-800 text-white'}`}
          required
        />
      </div>

      <div className="mb-4">
        <label className={`block mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Prepayment Amount (optional)</label>
        <input
          type="number"
          name="prepayment"
          value={formValues.prepayment}
          onChange={handleChange}
          className={`w-full p-2 rounded border ${theme === 'light' ? 'border-gray-300' : 'border-gray-600 bg-gray-800 text-white'}`}
        />
      </div>

      <button 
        type="submit" 
        className={`w-full p-2 rounded ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-gray-100'}`}>
        Calculate EMI
      </button>
    </form>
  );
}

export default LoanForm;
