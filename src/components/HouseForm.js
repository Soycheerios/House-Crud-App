import React, { useState } from 'react';

const HouseForm = ({ onSubmit }) => {
  const [id, setId] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id.trim() === '' || address.trim() === '' || city.trim() === '' || price.trim() === '') {
      return;
    }
    onSubmit({ id, address, city, price });
    setId('');
    setAddress('');
    setCity('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="HouseForm">
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter house ID"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
      /><br/><br/>
      <button type="submit">Add House</button> <br/><br/>
      </form>
  );
};

export default HouseForm;



