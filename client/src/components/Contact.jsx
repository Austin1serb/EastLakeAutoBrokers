import React, { useEffect, useRef } from 'react';
import '../Styles/Contact.css'
import ContactForm from './ContactForm';
const Contact = () => {
    const googleMapRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBIk_hW1boo7clmvGRPeF7Jpw2QF6N4hkQ&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);


        return () => {
            document.body.removeChild(script);
        };
    }, []);

    window.initMap = () => {
        const myLatLng = {
            lat: 47.710933685302734,
            lng: -122.16683197021484
        };

        const map = new window.google.maps.Map(googleMapRef.current, {
            zoom: 14,
            center: myLatLng,
            fullscreenControl: false,
            zoomControl: true,
            streetViewControl: false
        });

        new window.google.maps.Marker({
            position: myLatLng,
            map,
            title: 'My location'
        });
    };

    return (
        <div className='map-container' >
            <ContactForm/>
            <h1>Get Directions</h1>
            <div ref={googleMapRef} className='map' />
        </div>
    );
};

export default Contact;
