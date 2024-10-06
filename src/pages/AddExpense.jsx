import React, { useContext } from 'react';
import ExpenseForm from '../Components/ExpenseForm';
import { ExpenseContext } from '../context/ExpenseContext';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
  const { setExpenses } = useContext(ExpenseContext);
  const navigate = useNavigate();

  const handleSave = (newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...newExpense, id: Date.now() }
    ]);
    navigate('/');
  };

  return <ExpenseForm onSave={handleSave} />;
};

export default AddExpense;
