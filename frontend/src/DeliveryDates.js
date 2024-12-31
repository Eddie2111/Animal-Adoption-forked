import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeliveryDates = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDeliveryDates = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/animals/delivery-dates');
                console.log(response.data);
                setAnimals(response.data);
                setLoading(false);
            } catch (err) {
                setError('Could not fetch delivery dates.');
                setLoading(false);
            }
        };

        fetchDeliveryDates();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Delivery Dates</h1>
            <table>
                <thead>
                    <tr>
                        <th>Animal Name</th>
                        <th>Delivery Date</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal) => (
                        <tr key={animal._id}>
                            <td>{animal.name}</td>
                            <td>{new Date(animal.availableDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveryDates;
