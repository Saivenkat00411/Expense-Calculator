import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import '@testing-library/jest-dom';

test('renders Navbar with correct links', () => {
  const { getByText } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(getByText('Expense Calculator')).toBeInTheDocument();
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Add Expense')).toBeInTheDocument();
});
