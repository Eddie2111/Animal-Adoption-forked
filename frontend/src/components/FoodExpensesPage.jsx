import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FoodExpensesPage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/animals/food-expenses')
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching food expenses:', error);
      });
  }, []);

  return (
    <div>
      <h2>Food Expenses of Animals</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal._id}>
            {animal.name}: ${animal.foodExpense}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodExpensesPage;
