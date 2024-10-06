import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseForm = ({ expense = {}, onSave }) => {
  const [title, setTitle] = useState(expense.title || '');
  const [amount, setAmount] = useState(expense.amount || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      alert('Please enter all fields');
      return;
    }
    onSave({ ...expense, title, amount: parseFloat(amount) });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-group">
        <label htmlFor='Title'>Title</label>
        <input
          type="text"
          id='Title'
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor='Amount' >Amount</label>
        <input
          type="number"
          id='Amount'
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">Save</button>
    </form>
  );
};

export default ExpenseForm;
