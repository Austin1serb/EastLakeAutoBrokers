import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../Styles/Styles.css';
import locationPin from '../assets/red-location-pin.png';
import phoneLogo from '../assets/red-phone.png';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 902);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navbarClasses = ['navbar', scrolling ? 'navbar-black' : ''].join(' ');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={navbarClasses}>
            <div className="navbar-left">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Eastlake Auto Brokers" className='logo-image' />
                    </Link>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-box">
                    <div className="navbar-top">
                        <div className="navbar-address">
                            <a href="/address">
                                {isMobile ? (
                                    <img
                                        className='navigation-logo-mobile'
                                        style={{ width: '50px', marginRight: '10px' }}
                                        src={locationPin}
                                        alt="Address"
                                    />
                                ) : (
                                    <>
                                        <img className='navigation-logo' src={locationPin} alt="Address" />
                                        13105 NE 124th St Kirkland, WA 98034
                                    </>
                                )}
                            </a>
                        </div>
                        <div className="navbar-phone">
                            <a href="tel:+4258231500">
                                {isMobile ? (
                                    <img
                                        className='phone-logo-mobile'
                                        style={{ width: '50px', marginRight: '10px' }}
                                        src={phoneLogo}
                                        alt="Phone"
                                    />
                                ) : (
                                    <>
                                        <img className='phone-logo' src={phoneLogo} alt="Phone" />
                                        425-823-1500
                                    </>
                                )}
                            </a>
                        </div>
                    </div>
                </div>
                {isMobile ? (
                    <div className="mobile-menu-icon" onClick={toggleMenu}>
                        <div className={`menu-bars ${menuOpen ? 'open' : ''}`}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        {menuOpen && (
                            <div className="mobile-overlay">
                                <div className="mobile-dropdown">
                                    <ul className='navbar-bottom' >
                                        <li className='navbar-bottom-mobile' ><Link to="/inventory">Inventory</Link></li>
                                        <li className='navbar-bottom-mobile' ><Link to="/finance">Finance</Link></li>
                                        <li className='navbar-bottom-mobile' ><Link to="/contact">Contact</Link></li>
                                        <li className='navbar-bottom-mobile' ><Link to="/about">About Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="navbar-box">
                        <div className="navbar-bottom">
                            <ul>
                                <li><Link to="/inventory">Inventory</Link></li>
                                <li><Link to="/finance">Finance</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/contact">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;