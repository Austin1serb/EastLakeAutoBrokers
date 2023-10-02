import React, { useEffect, useState } from 'react';
import '../Styles/Slideshow.css'; // Import your CSS file
import img1 from '../assets/IMG_3211.jpeg';
import img2 from '../assets/rav4.jpg';
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
                    <div key={index} className="slide-container">
                        <img
                            src={image}
                            alt={`pic ${index + 1}`}
                            className={index === currentIndex ? 'slideshow-image show' : 'slideshow-image'}
                        />
                        <div className="slide-number">
                            {images.map((_, idx) => (
                                <span
                              
                                    key={idx}
                                    href="#"
                                    className={idx === currentIndex ? 'active' : ''}
                                    onClick={() => handleClick(idx)}
                                >
                                    {String(idx + 1).padStart(2, '0')}. <br />
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="controls">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`control-number ${index === currentIndex ? 'active' : ''}`}
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
