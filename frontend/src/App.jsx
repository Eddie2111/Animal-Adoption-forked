import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import FoodExpensesPage from './components/FoodExpensesPage';
import MedicalBillsPage from './components/MedicalBillsPage';
import DeliveryDatesPage from './components/DeliveryDatesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Animal Inventory Management</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/food-expenses">Food Expenses</a></li>
            <li><a href="/medical-bills">Medical Bills</a></li>
            <li><a href="/delivery-dates">Delivery Dates</a></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/food-expenses" element={<FoodExpensesPage />} />
          <Route path="/medical-bills" element={<MedicalBillsPage />} />
          <Route path="/delivery-dates" element={<DeliveryDatesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


