import React, { useState } from 'react';
import HouseForm from './HouseForm';
import HouseList from './HouseList';

const HouseApp = () => {
  const [houses, setHouses] = useState([]);

  const handleAddHouse = (newHouse) => {
    const updatedHouses = [...houses, newHouse];
    setHouses(updatedHouses);
  };

  return (
    <div className='container'>
      <h1 className='pageTitle'>House App</h1><br/>
      <HouseForm onSubmit={handleAddHouse} />
      <HouseList houses={houses} setHouses={setHouses} />
    </div>
  );
};

export default HouseApp;













