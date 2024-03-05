import React, { useEffect, useState } from 'react';
import '../Styles/Inventory.css';
import CompareModal from './CompareModel';
import SearchBar from './SearchBar';
import CustomCheckbox from './CustomCheckBox'
import SendToPhone from './SendToPhone';
import { Link } from 'react-router-dom';


const cars = [
  {
    description: {
      price: 12950,
      mileage: 148821,
      model: "MDX",
      bodyType: "SUV",
      exterior: "Silver",
      interior: "Leather",
      doors: 4,
      stock: "520136",
      vin: "2HNYD28669H520136",
      engine: "3.7L V6 SOHC 24V",
      transmission: "Automatic",
      fuelType: "Gasoline",
      driveTrain: "4WD"
    },
    details: {
      year: 2009,
      make: "Acura",
      trim: "Tech",
      color: "Silver",
      interiorColor: "Gray",
      cylinders: 6,
      fuelEconomy: "City 15/Hwy 20"
    },
    _id: "65121192f4f2c76b2cbc7ac3",
    name: "2009 Acura MDX",
    imgSource: "https://imagescdn.dealercarsearch.com/Media/17703/20045188/638201235898773774.jpg",
    createdAt: "2023-09-25T23:02:42.023Z",
    updatedAt: "2023-09-25T23:02:42.023Z",
    __v: 0
  },
  {
    description: {
      price: 27995,
      mileage: 62594,
      model: "MDX",
      bodyType: "SUV",
      exterior: "Black",
      interior: "Leather",
      doors: 4,
      stock: "052341",
      vin: "5FRYD4H49GB052341",
      engine: "3.5L V6 SOHC 24V",
      transmission: "Automatic",
      fuelType: "Gasoline",
      driveTrain: "4WD"
    },
    details: {
      year: 2016,
      make: "Acura",
      trim: "Tech",
      color: "Black",
      interiorColor: "Black",
      cylinders: 6,
      fuelEconomy: "City 18/Hwy 26"
    },
    _id: "65121205f4f2c76b2cbc7ac5",
    name: "2016 Acura MDX",
    imgSource: "https://imagescdn.dealercarsearch.com/Media/17703/19930153/638175296231428134.jpg",
    createdAt: "2023-09-25T23:04:37.658Z",
    updatedAt: "2023-09-25T23:04:37.658Z",
    __v: 0
  },
  {
    description: {
      price: 9950,
      mileage: 149834,
      model: "RL",
      bodyType: "Sedan",
      exterior: "Black",
      interior: "Leather",
      doors: 4,
      stock: "003540",
      vin: "JH4KB16677C003540",
      engine: "3.5L V6 SOHC 24V",
      transmission: "Automatic",
      fuelType: "Gasoline",
      driveTrain: "AWD"
    },
    details: {
      year: 2007,
      make: "Acura",
      trim: "Tech",
      color: "Black",
      interiorColor: "Black",
      cylinders: 6,
      fuelEconomy: "City 18/Hwy 26"
    },
    _id: "65121281f4f2c76b2cbc7ac8",
    name: "2007 Acura RL",
    imgSource: "https://imagescdn.dealercarsearch.com/Media/17703/20328686/638274642050968109.jpg",
    createdAt: "2023-09-25T23:06:41.973Z",
    updatedAt: "2023-09-25T23:06:41.973Z",
    __v: 0
  },
  {
    description: {
      price: 11950,
      mileage: 118585,
      model: "A5",
      bodyType: "Sedan",
      exterior: "Gray",
      interior: "Leather",
      doors: 4,
      stock: "001479",
      vin: "WAUDK78T49A001479",
      engine: "3.2L V6 DOHC 24V",
      transmission: "Automatic",
      fuelType: "Gasoline",
      driveTrain: "AWD"
    },
    details: {
      year: 2009,
      make: "Audi",
      trim: "Coupe",
      color: "Gray",
      interiorColor: "Gray",
      cylinders: 6,
      fuelEconomy: "City 17/Hwy 26"
    },
    _id: "651212fcf4f2c76b2cbc7acb",
    name: "2009 Audi A5",
    imgSource: "https://imagescdn.dealercarsearch.com/Media/17703/20433543/638302218582987760.jpg",
    createdAt: "2023-09-25T23:08:44.036Z",
    updatedAt: "2023-09-25T23:08:44.036Z",
    __v: 0
  },
  {
    description: {
      price: 14950,
      mileage: 137939,
      model: "Q7",
      bodyType: "SUV",
      exterior: "Black",
      interior: "Select",
      doors: 4,
      stock: "000238",
      vin: "WA1LMAFE9BD000238",
      engine: "3.0L V6 DOHC 24V TURBO DIESEL",
      transmission: "Automatic",
      fuelType: "Diesel",
      driveTrain: "4WD"
    },
    details: {
      year: 2011,
      make: "Audi",
      trim: "TDI Quattro",
      color: "Black",
      interiorColor: "Gray",
      cylinders: 6,
      fuelEconomy: "City 17/Hwy 25"
    },
    _id: "6512136af4f2c76b2cbc7ace",
    name: "2011 Audi Q7",
    imgSource: "https://imagescdn.dealercarsearch.com/Media/17703/20148180/638228767150062301.jpg",
    createdAt: "2023-09-25T23:10:34.073Z",
    updatedAt: "2023-09-25T23:10:34.073Z",
    __v: 0
  }
]


const Inventory = () => {
  const [inventoryData, setInventoryData] = useState(cars);
  const [selectedCars, setSelectedCars] = useState([]);
  const [compareVisible, setCompareVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // This useEffect hook updates the compareVisible state
  // whenever selectedCars changes.
  useEffect(() => {
    setCompareVisible(selectedCars.length > 0);
  }, [selectedCars]);


  const carImages = {
    car1: require('../assets/acura.webp'),
    car2: require('../assets/blackacura.jpeg'),
    car3: require('../assets/acuraRl.webp'),
    car4: require('../assets/adui.webp'),
    car5: require('../assets/audiQ7.webp'),
  };


  const handleCheckboxClick = (carId) => {
    const isCarSelected = selectedCars.includes(carId);
    setSelectedCars(isCarSelected ? selectedCars.filter(id => id !== carId) : [...selectedCars, carId]);
  };

  const handleClearAllClick = () => {
    setSelectedCars([]);
    setCompareVisible(false);
  };

  const handleCompareButtonClick = () => 
  {
    if(selectedCars.length<2){
      alert("Select atleast 2 vehicles to compare")
      return
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  return (
    <div className="inventory-container">
      <SearchBar className="search-bar" />
      <div className="inventory-boxes">
        {cars.map((car, index) => (
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
              <SendToPhone className='sendtophonebutton'/>
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

      {showModal && (
        <CompareModal cars={cars} selectedCars={selectedCars} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Inventory;

