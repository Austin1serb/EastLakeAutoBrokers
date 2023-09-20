import React from 'react';

const Boxes = () => {
    return (
        <div className="boxes-container">
            <div className="box first-box">
                <div className="box-content">
                    <h2 className="box-text">
                        <span className="red-text">Browse Our</span> <br />
                        <span className="white-text">Pre-Owned Inventory</span>
                    </h2>
                </div>
            </div>
            <div className="box second-box">
                <div className="box-content">
                    <h2 className="box-text">
                        <span className="red-text">Get Pre-Approved</span> <br />
                        <span className="white-text">Finance Center</span>
                    </h2>
                </div>
            </div>
            <div className="box third-box">
                <div className="box-content">
                    <h2 className="box-text">
                        <span className="red-text">Get In Touch</span> <br />
                        <span className="white-text">Contact Us</span>
                    </h2>
                </div>
            </div>
            <div className="box fourth-box">
                <div className="box-content">
                    <h2 className="box-text">
                        <span className="red-text">Hear Our Story</span> <br />
                        <span className="white-text">About Us</span>
                    </h2>
                </div>
            </div>

        </div>
    );
};

export default Boxes;
