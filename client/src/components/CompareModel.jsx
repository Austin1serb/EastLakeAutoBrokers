import React, { useState, useEffect } from 'react';
import '../Styles/CompareModel.css';

const CompareModal = ({ selectedCars, onClose }) => {
    const [selectedCarsData, setSelectedCarsData] = useState([]);

    const carImages = {
        car1: require('../assets/acura.webp'),
        car2: require('../assets/blackacura.jpeg'),
        car3: require('../assets/acuraRl.webp'),
        car4: require('../assets/adui.webp'),
        car5: require('../assets/audiQ7.webp'),
    };

    useEffect(() => {
        // Fetch car details for the selected car IDs from your API
        const fetchSelectedCarsData = async () => {
            const selectedCarsDetails = [];

            // Loop through the selected car IDs and fetch their details
            for (const carId of selectedCars) {
                try {
                    const response = await fetch(`http://localhost:8000/api/cars/${carId}`);
                    const carData = await response.json();
                    selectedCarsDetails.push(carData);
                } catch (error) {
                    console.error(`Error fetching car details for car ID ${carId}:`, error);
                }
            }

            setSelectedCarsData(selectedCarsDetails);
        };

        fetchSelectedCarsData();
    }, [selectedCars]);

    return (
        <div className="compare-modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                <h2>Compare Vehicles</h2>
                {/* Render selectedCarsData in a table format */}
                <table className="compare-table">
                    <thead>
                        <tr>
                            <th></th>
                            {selectedCarsData.map((car, index) => (
                                <th className='car-images' key={index}>
                                    <img src={carImages[`car${index + 1}`]} alt={car.name} className="car-image" />
                                    <button className='image-button' >VIEW VEHICLE</button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Price</td>
                            {selectedCarsData.map((car, index) => (
                                <td key={index}>${car.description.price}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Year</td>
                            {selectedCarsData.map((car, index) => (
                                <td key={index}>{car.details.year}</td>
                            ))}
                        </tr>
                        <tr>
                            <td>Make</td>
                            {selectedCarsData.map((car, index) => (
                                <td key={index}>{car.details.make}</td>
                            ))}
                        </tr>
                        {/* Add more rows for other attributes */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompareModal;
