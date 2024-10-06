import React from 'react';
import ExpenseSummary from '../Components/ExpenseSummary';
import ExpenseList from '../Components/ExpenseList';

const Home = () => {
  return (
    <div>
      <ExpenseSummary />
      <ExpenseList />
    </div>
  );
};

export default Home;
