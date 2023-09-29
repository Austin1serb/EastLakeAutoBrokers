import React, { useEffect, useState } from 'react';
import '../Styles/Inventory.css';
import CompareModal from './CompareModel';
import SearchBar from './SearchBar';
import CustomCheckbox from './CustomCheckBox'
import SendToPhone from './SendToPhone';
import { Link } from 'react-router-dom';
const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);
  const [compareVisible, setCompareVisible] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [selectedCarsData, setSelectedCarsData] = useState([]);
  useEffect(() => {
    // Fetch car data from your server API
    fetch('http://localhost:8000/api/cars/')
      .then((response) => response.json())
      .then((data) => setInventoryData(data))
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);

  useEffect(() => {
    // Show the compare navbar when at least one car is selected
    setCompareVisible(selectedCars.length > 0);
  }, [selectedCars]);

  const carImages = {
    car1: require('../assets/acura.webp'),
    car2: require('../assets/blackacura.jpeg'),
    car3: require('../assets/acuraRl.webp'),
    car4: require('../assets/adui.webp'),
    car5: require('../assets/audiQ7.webp'),
  };

  // Function to handle checkbox clicks
  const handleCheckboxClick = (carId) => {
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter((id) => id !== carId));
    } else {
      // Fetch car data for the clicked car ID
      fetch(`http://localhost:8000/api/cars/${carId}`)
        .then((response) => response.json())
        .then((data) => {
          // Add the fetched car data to the selectedCarsData state
          setSelectedCarsData((prevData) => [...prevData, data]);
        })
        .catch((error) => console.error('Error fetching car data:', error));
      setSelectedCars([...selectedCars, carId]);
    }
    // Toggle the visibility of the compare navbar
    setCompareVisible(selectedCars.length > 0);
  };


  const handleClearAllClick = () => {
    setSelectedCars([]);
    document.querySelectorAll('.compare-checkbox').forEach((checkbox) => {
      checkbox.checked = false;
    });
    // Hide the compare navbar when clear all is clicked
    setCompareVisible(false);
  };
  const handleCompareButtonClick = () => {
    setShowModal(true); // Show the modal
  };
  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };


  return (
    <div className="inventory-container">
      <SearchBar className="search-bar" />
      <div className="inventory-boxes">
        {inventoryData.map((car, index) => (
          <div key={car._id} className="inventory-box">
            <h1 className="car-name">{car.name}</h1>
            <div className="car-image-container">
              <img src={carImages[`car${index + 1}`]} alt={car.name} className="car-image" />
            </div>

            <div className="car-info">
              <p className="car-price">Price: <br /> ${car.description.price}</p>
              <p className="car-miles">Mileage: <br /> {car.description.mileage}</p>
            </div>
            <Link to={`/details/${car._id}`} className="car-details-button">
              Car Details
            </Link>
            <div className="bottom-box">
              <CustomCheckbox
                className='compare-checkbox'
                checked={selectedCars.includes(car._id)}
                onChange={() => handleCheckboxClick(car._id)}
              />
              <SendToPhone
                className='sendtophonebutton'
              />

            </div>
          </div>
        ))}
      </div>


      <div className={`compare-navbar ${compareVisible ? 'visible' : ''}`}>
        <p> VEHICLES SELECTED ({selectedCars.length}/4)</p>
        <button className="clear-all-button" onClick={handleClearAllClick}>
          Clear All
        </button>
        <button className="compare-button" onClick={handleCompareButtonClick}>
          Compare Vehicles
        </button>
      </div>

      {/* Render the modal if showModal is true */}
      {showModal && (
        <CompareModal selectedCars={selectedCars} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Inventory;

