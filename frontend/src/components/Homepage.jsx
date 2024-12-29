import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [animals, setAnimals] = useState([]);
    const [newAnimal, setNewAnimal] = useState({
        name: '',
        species: '',
        breed: '',
        age: '',
        price: '',
        foodExpense: 0,        // Default food expense
        medicalBill: 100,      // Default medical bill
        deliveryDate: ''      // Default empty delivery date
    });

    // Fetch animals from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/animals')
            .then(response => {
                setAnimals(response.data);
            })
            .catch(error => console.error('Error fetching animals:', error));
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setNewAnimal({
            ...newAnimal,
            [e.target.name]: e.target.value
        });
    };

    // Submit new animal data
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/animals', newAnimal)
            .then(response => {
                setAnimals([...animals, response.data]);
                setNewAnimal({
                    name: '',
                    species: '',
                    breed: '',
                    age: '',
                    price: '',
                    foodExpense: 0,
                    medicalBill: 100,
                    deliveryDate: ''
                });
            })
            .catch(error => console.error('Error adding animal:', error));
    };

    return (
        <div>
            <h1>Animal Inventory Management</h1>

            {/* Form to add a new animal */}
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={newAnimal.name} onChange={handleChange} required />

                <label>Species:</label>
                <input type="text" name="species" value={newAnimal.species} onChange={handleChange} required />

                <label>Breed:</label>
                <input type="text" name="breed" value={newAnimal.breed} onChange={handleChange} />

                <label>Age:</label>
                <input type="number" name="age" value={newAnimal.age} onChange={handleChange} required />

                <label>Price:</label>
                <input type="number" name="price" value={newAnimal.price} onChange={handleChange} required />

                <label>Food Expense:</label>
                <input type="number" name="foodExpense" value={newAnimal.foodExpense} onChange={handleChange} />

                <label>Medical Bill:</label>
                <input type="number" name="medicalBill" value={newAnimal.medicalBill} onChange={handleChange} />

                <label>Delivery Date:</label>
                <input type="date" name="deliveryDate" value={newAnimal.deliveryDate} onChange={handleChange} />

                <button type="submit">Add Animal</button>
            </form>

            {/* Display all animals */}
            <h2>Animals List</h2>
            <ul>
                {animals.map((animal) => (
                    <li key={animal._id}>
                        <strong>{animal.name}</strong> - {animal.species}<br />
                        <span>Food Expense: ${animal.foodExpense}</span><br />
                        <span>Medical Bill: ${animal.medicalBill}</span><br />
                        <span>Delivery Date: {animal.deliveryDate ? new Date(animal.deliveryDate).toLocaleDateString() : 'N/A'}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;

