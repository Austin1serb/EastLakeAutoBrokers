import { FaRegCommentAlt, FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import '../Styles/SendToPhone.css'



const SendToPhone = ({ car }) => {
    const [showForm, setShowForm] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSendText = () => {
        // Implement the logic to send a text message with the car link to the entered phone number
        // You can use a third-party SMS service or an API to send the text message
        // Example: sendTextMessage(phoneNumber, car.link);

        // Clear the phone number input after sending the text
        setPhoneNumber('');
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <div className='send-to-phone'>
                {!showForm ? (
                    <span onClick={toggleForm}>
                        <FaRegCommentAlt className="text1-icon" />
                        Send to Phone
                    </span>
                ) : (
                    <span onClick={toggleForm}>
                        <FaRegCommentAlt className="text1-icon" />
                        Send to Phone
                    </span>
                )}
            </div>
            {showForm && (
                <div className="send-to-phone-form" style={{ position: 'absolute' }}>
                    <div className="send-to-phone-input">
                        <input
                            type="text"
                            placeholder="000-000-0000"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    </div>
                    <div >
                        <button className="send-to-phone-buttons" onClick={handleSendText}>
                            <FaArrowRight className='arrow-button'/>
                        </button>
                        {/*<span onClick={toggleForm}><GiCancel/></span>*/}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SendToPhone;
