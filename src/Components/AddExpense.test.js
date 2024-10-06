import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpenseContext } from '../context/ExpenseContext';
import ExpenseForm from './ExpenseForm';
import '@testing-library/jest-dom';

test('renders Add Expense form', () => {
  render(
    <ExpenseContext.Provider value={{ setExpenses: jest.fn() }}>
      <ExpenseForm />
    </ExpenseContext.Provider>
  );

  expect(screen.getByLabelText('Title')).toBeInTheDocument();
  expect(screen.getByLabelText('Amount')).toBeInTheDocument();
  expect(screen.getByText('Save')).toBeInTheDocument();
});
