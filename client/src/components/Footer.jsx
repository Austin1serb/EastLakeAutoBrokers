import React from 'react';
import '../Styles/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return (
        <div className='container' >
            <div className="footer-container">
                <div className="footer-left">
                    <h2>Eastlake Auto Brokers</h2>
                    <p>13105 NE 124th St <br /> Kirkland, WA</p>
                    <p>425-823-1500</p>
                    <div className="contact-facebook">
                        <a href="/contact" className="contact-button">CONTACT</a>
                        <div className="facebook-link">
                            <a href="#">
                                <FacebookIcon style={{ fontSize: '4rem' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-center">
                    <a href="">Directions</a>
                    <a href="">
                        <LocationOnIcon className='location-icon' style={{ fontSize: '3rem' }} />
                    </a>
                </div>
                <div className="footer-right">
                    <div className="footer-hours">
                        <h3>HOURS</h3>
                        <ul>
                            <li>Mon: 10:00a - 7:00p</li>
                            <li>Tue: 10:00a - 7:00p</li>
                            <li>Wed: 10:00a - 7:00p</li>
                            <li>Thu: 10:00a - 7:00p</li>
                            <li>Fri: 10:00a - 7:00p</li>
                            <li>Sat: 10:00a - 5:00p</li>
                            <li>Sun: 10:00a - 5:00p</li>
                        </ul>
                    </div>

                </div>
            </div>
            <footer className="footer-copyright">
                <p>&copy; 2023 Eastlake Auto Brokers. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/sitemap">•  Sitemap</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
