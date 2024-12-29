import React, { useState } from 'react';

function AnimalForm({ onAddAnimal }) {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAnimal(formData);
    setFormData({
      name: '',
      species: '',
      breed: '',
      age: '',
      price: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="species" value={formData.species} onChange={handleChange} placeholder="Species" required />
      <input type="text" name="breed" value={formData.breed} onChange={handleChange} placeholder="Breed" />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age (months)" required />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price ($)" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
      <button type="submit">Add Animal</button>
    </form>
  );
}

export default AnimalForm;
