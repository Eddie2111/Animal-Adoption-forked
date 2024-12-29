import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MedicalBillsPage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/animals/medical-bills')
      .then((response) => {
        setAnimals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching medical bills:', error);
      });
  }, []);

  return (
    <div>
      <h2>Medical Bills of Animals</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal._id}>
            {animal.name}: ${animal.medicalBill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicalBillsPage;
