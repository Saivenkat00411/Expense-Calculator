import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="alert alert-info">
      <h5>Total Expenses: ${total}</h5>
    </div>
  );
};

export default ExpenseSummary;
