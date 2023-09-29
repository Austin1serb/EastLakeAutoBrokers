import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SendToPhone from './SendToPhone';
import { FaArrowLeft } from 'react-icons/fa';
import { AiOutlineCar } from 'react-icons/ai';
import '../Styles/CarDetails.css';

const CarDetails = () => {
    const { carId } = useParams();

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch car data based on carId from your API
        fetch(`http://localhost:8000/api/cars/${carId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCar(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [carId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!car) {
        return <div>Car not found</div>;
    }

    return (
        <div className="car-details">
            <div className="blackout"></div>
            <Link to="/inventory" className="back-link">
                <FaArrowLeft className="back-icon" /> Back to Inventory
            </Link>

                <h2 className="car-details-name1">{car.name}</h2>

            <div className="car-info-top">
                <div className="car-details-top">
                    <p className="car-price">Price: ${car.description.price}</p>
                    <p className="car-miles">Miles: {car.description.mileage}</p>
                </div>
                <div className="contact-button-container">
                    <button className="contact-details-button">Contact Us</button>
                </div>
            </div>
            <div className="car-image-container">
                <img src={car.imgSource} alt={car.description.name} className="car-image" />
            </div>
            <div className="car-buttons">
                <button className="test-drive-button"> <AiOutlineCar className='test-drive-icon'/> Test Drive</button>
                <SendToPhone car={car} />
            </div>
            <div className="car-description">
                <h3>Car Details:</h3>
                <ul>
                    <li>Year: {car.details.year}</li>
                    <li>Make: {car.details.make}</li>
                    <li>Model: {car.details.model}</li>
                    <li>Trim: {car.details.trim}</li>
                    <li>Body Style: {car.description.bodyType}</li>
                    <li>Mileage: {car.description.mileage} miles</li>
                    <li>Transmission: {car.description.transmission}</li>
                    <li>Drivetrain: {car.description.driveTrain}</li>
                    <li>Engine: {car.description.engine}</li>
                    <li>Exterior Color: {car.description.exterior}</li>
                    <li>Interior Color: {car.description.interior}</li>
                    <li>Stock #: {car.description.stock}</li>
                    <li>VIN #: {car.description.vin}</li>
                </ul>
            </div>
        </div>
    );
};

export default CarDetails;
