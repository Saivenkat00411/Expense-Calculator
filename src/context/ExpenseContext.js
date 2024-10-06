import React, { useState, createContext, useEffect } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
      }, []);
    
      useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
      }, [expenses]);


  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};
