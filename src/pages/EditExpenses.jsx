import React, { useContext } from 'react';
import ExpenseForm from '../Components/ExpenseForm';
import { ExpenseContext } from '../context/ExpenseContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditExpense = () => {
  const { id } = useParams();
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const navigate = useNavigate();
  const expense = expenses.find((exp) => exp.id === parseInt(id));

  const handleSave = (updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((exp) => (exp.id === updatedExpense.id ? updatedExpense : exp))
    );
    navigate('/');
  };

  return <ExpenseForm expense={expense} onSave={handleSave} />;
};

export default EditExpense;
