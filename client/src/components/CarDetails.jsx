import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SendToPhone from './SendToPhone';
import { FaArrowLeft } from 'react-icons/fa';
import { AiOutlineCar } from 'react-icons/ai';
import '../Styles/CarDetails.css';

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
const CarDetails = () => {
    const { carId } = useParams();

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //useEffect(() => {
    //    // Fetch car data based on carId from your API
    //    fetch(`http://localhost:8000/api/cars/${carId}`)
    //        .then((response) => {
    //            if (!response.ok) {
    //                throw new Error('Network response was not ok');
    //            }
    //            return response.json();
    //        })
    //        .then((data) => {
    //            setCar(data);
    //            setLoading(false);
    //        })
    //        .catch((error) => {
    //            setError(error);
    //            setLoading(false);
    //        });
    //}, [carId]);
    useEffect(() => {
        // Remove the fetch call and instead find the car from the passed cars prop
        const foundCar = cars.find(car => car._id === carId);

        if (foundCar) {
            setCar(foundCar);
        } else {
            setError({ message: 'Car not found' });
        }

        setLoading(false);
    }, [carId, cars]);

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
