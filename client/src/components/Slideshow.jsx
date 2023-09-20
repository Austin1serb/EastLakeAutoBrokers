import React, { useEffect, useState } from 'react';
import '../Styles/Styles.css'; // Import your CSS file
import img1 from '../assets/IMG_3211.jpeg'
import img2 from '../assets/4runner.png'
import img3 from '../assets/Slide3d-min.jpg';
import img4 from '../assets/Slide4d-min.jpg';
import img5 from '../assets/Slide5da.jpg';

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [img1, img2, img3, img4, img5 /* Add more image paths as needed */];

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            <div className="slides">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`pic ${index + 1}`}
                        style={{
                            display: index === currentIndex ? 'block' : 'none',
                            width: '100%', // Set the image width to 100%

                            objectFit: 'cover', // Maintain aspect ratio and cover the container
                        }}
                    />
                ))}
            </div>
            <div className="controls">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`control-number ${index === currentIndex ? 'active' : ''
                            }`}
                        onClick={() => handleClick(index)}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;
