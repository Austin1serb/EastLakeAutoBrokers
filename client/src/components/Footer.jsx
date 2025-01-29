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

            <div style={{ width: "100%", backgroundColor: "#1a1a1a", borderTop: "1px solid #333", padding: "10px 0", color: "#b3b3b3", fontSize: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", padding: "0 20px" }}>
                    <a href="https://serbyte.net"  style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="Visit Serbyte Development">
                        Serbyte Development
                    </a>
                    <a href="https://serbyte.net/services" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="View Serbyte Services">
                        Services
                    </a>
                    <a href="https://serbyte.net/projects" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="View Serbyte Projects">
                        Projects
                    </a>
                    <a href="https://serbyte.net/insights" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="Read Serbyte Blog">
                        Blog
                    </a>
                    <a href="https://serbyte.net/contact" style={{ color: "#b3b3b3", textDecoration: "none", transition: "color 0.2s" }} aria-label="Contact Serbyte">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
