import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ExpenseProvider } from './context/ExpenseContext';
import Navbar from './Components/NavBar';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import EditExpenses from './pages/EditExpenses';

const App = () => {
  return (

    <Router>
      <ExpenseProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/edit/:id" element={<EditExpenses />} />
          </Routes>
        </div>
      </ExpenseProvider>
    </Router>

  );
};

export default App;
