import React from 'react';
import HouseItem from './HouseItem';

const HouseList = ({ houses, setHouses }) => {
  const handleDelete = (id) => {
    const updatedHouses = houses.filter((house) => house.id !== id);
    setHouses(updatedHouses);
  };

  const handleUpdate = (id, updatedHouse) => {
    const updatedHouses = houses.map((house) =>
      house.id === id ? { ...house, ...updatedHouse } : house
    );
    setHouses(updatedHouses);
  };

  if (!Array.isArray(houses) || houses.length === 0) {
    return <div className='NoHouse'><b><h3>No houses found</h3></b></div>;
  }

  return (
    <div className='HouseList'>
    {houses.map((house) => (
      <HouseItem
        key={house.id}
        house={house}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    ))}
  </div>
);
};

export default HouseList;

