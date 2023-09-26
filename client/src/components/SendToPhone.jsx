import React, { useState } from 'react';
import { FaAddressBook } from 'react-icons/fa';

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
    <div   >
      {!showForm ? (
        <div style={{alignItems: 'center', cursor: 'pointer'}}  className='send-to-phone' >
          <span  onClick={toggleForm}>
            <FaAddressBook/>
            Send to Phone</span>
        </div>
      ) : (
        <div className="send-to-phone-form" style={{position:'absolute'}} >
          <div className="send-to-phone-input">
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="send-to-phone-buttons">
            <button onClick={handleSendText}>Send Text</button>
            <span onClick={toggleForm}>Cancel</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SendToPhone;
