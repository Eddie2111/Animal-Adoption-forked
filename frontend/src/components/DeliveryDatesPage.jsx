import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DeliveryDatesPage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/animals/delivery-availability')
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching delivery dates:', error);
      });
  }, []);

  return (
    <div>
      <h2>Delivery Dates of Animals</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal._id}>
            {animal.name}: {animal.availableDate ? new Date(animal.availableDate).toLocaleDateString() : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeliveryDatesPage;
