import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import '../Styles/Inventory.css';

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    // Fetch car data from your server API
    fetch('http://localhost:8000/api/cars/')
      .then((response) => response.json())
      .then((data) => setInventoryData(data))
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);

  return (
    <div className="inventory-container">
      <h2>Inventory</h2>
      <SearchBar />
      <div className="inventory-boxes">
        {inventoryData.map((car) => (
          <div key={car._id} className="inventory-box">
            <h3 className="car-name">{car.name}</h3>
            <img src={car.imgSource} alt={car.name} className="car-image" />
            <div className="car-info">
              <p className="car-price">Price: ${car.price}</p>
              <p className="car-miles">Mileage: {car.description.mileage} miles</p>
            </div>
            <button className="car-details-button">Car Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
