import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
const ExpenseList = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h3>Expenses List</h3>
      <ul className="list-group">
        {expenses.map((expense) => (
          <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{expense.title}: ${expense.amount}</span>
            <div>
              <button onClick={() => navigate(`/edit/${expense.id}`)} className="btn btn-warning btn-sm mx-1"><FaEdit/> Edit</button>
              <button onClick={() => handleDelete(expense.id)} className="btn btn-danger btn-sm"><FaTrash/> Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
