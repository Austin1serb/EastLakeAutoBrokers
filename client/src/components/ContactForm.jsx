import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Styles/ContactForm.css'
const ContactForm = () => {
  const [isMessageSent, setMessageSent] = useState(false);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setMessageSent(true);
    // You can add logic to send the form data to your backend or perform any other actions.
  };

  return (
    <div className='contact-form-container'>
      <h1>CONTACT US</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{


          '& .MuiTextField-root': {
            m: 1,
            width: '90%',

          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#888', // Change the border color when not focused
          },
          '& .MuiInputLabel-root': {
            color: '#888', // Change the label color when not focused
          },
          '& .Mui-focused': {
            color: 'lightblue', // Change the color when focused


            '& .MuiInputBase-input': {
              color: 'white', // Change the text color
            },

          }
        }
        }
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{
            '&:hover': {

              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', // Change the border color
              }
            },
          }}
          required
          id="firstName"
          label="First Name"
          variant="outlined"
          fullWidth

        />
        <TextField
                  sx={{
                    '&:hover': {
        
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white', // Change the border color
                      }
                    },
                  }}
          required
          id="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
        />
        <TextField
                  sx={{
                    '&:hover': {
        
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white', // Change the border color
                      }
                    },
                  }}
          required
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
        />
        <TextField
                  sx={{
                    '&:hover': {
        
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white', // Change the border color
                      }
                    },
                  }}
          required
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          type="tel"
          fullWidth
        />
        <TextField
                  sx={{
                    '&:hover': {
        
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white', // Change the border color
                      }
                    },
                  }}
          required
          id="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />

        <div className='send-button' style={{ marginTop: '16px' }}>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              ':disabled': {
                borderColor: '#ccc', // Change the border color for disabled state
                color: '#ccc', // Change the text color for disabled state
              },
            }}
            disabled={isMessageSent}
          >
            {isMessageSent ? 'Message Sent' : 'Send Message'}
          </Button>
        </div>
      </Box>
    </div>
  );
}
export default ContactForm;