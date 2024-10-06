import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import ExpenseList from './ExpenseList';
import { ExpenseContext } from '../context/ExpenseContext'; 

test('renders ExpenseList correctly', () => {
  const expenses = [
    { id: 1, title: 'Groceries', amount: 50 },
    { id: 2, title: 'Utilities', amount: 100 },
  ];

  render(
    <MemoryRouter> 
      <ExpenseContext.Provider value={{ expenses }}>
        <ExpenseList />
      </ExpenseContext.Provider>
    </MemoryRouter>
  );

  // Add your assertions here
  expect(screen.getByText(/groceries/i)).toBeInTheDocument();
  expect(screen.getByText(/utilities/i)).toBeInTheDocument();
});
