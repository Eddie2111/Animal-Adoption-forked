import React from 'react';

function AnimalList({ animals }) {
  return (
    <div>
      <h2>Animal List</h2>
      {animals.length > 0 ? (
        <ul>
          {animals.map((animal) => (
            <li key={animal._id}>
              <h3>{animal.name}</h3>
              <p>Species: {animal.species}</p>
              <p>Breed: {animal.breed || 'N/A'}</p>
              <p>Age: {animal.age} months</p>
              <p>Price: ${animal.price}</p>
              <p>Description: {animal.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No animals available.</p>
      )}
    </div>
  );
}

export default AnimalList;
