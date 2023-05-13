
import React, { useState } from 'react';

const HouseItem = ({ house, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(house.price);

  const handleDelete = () => {
    onDelete(house.id);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    onUpdate(house.id, { price: updatedPrice });
    setIsEditing(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">House ID: {house.id}</h5>
        <p className="card-text">Address: {house.address}</p>
        <p className="card-text">City: {house.city}</p>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
              className="form-control"
            />
            <button onClick={handleUpdate} className="btn btn-primary">
              Save
            </button>
          </div>
        ) : (
          <div>
            <p className="card-text">Price: {house.price}</p>
            <button onClick={handleToggleEdit} className="btn btn-success">
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HouseItem;
