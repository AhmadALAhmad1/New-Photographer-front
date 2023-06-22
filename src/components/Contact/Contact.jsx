import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import AboutHeader from '../About/AboutHeader/AboutHeader';
import ba from '../../images/ba.jpg';
import './Contact.css';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneClick = () => {
    window.location.href = 'tel:+961 71 569 694'; // Replace with your phone number
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:example@example.com'; // Replace with your email address
  };

  const handleLocationClick = () => {
    window.open('https://goo.gl/maps/v3w6E2yn6B6AgYMS8'); // Replace latitude and longitude with your desired location
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <AboutHeader backgroundImage={ba} />
      <div className="contact-page">
        <div className="Contact-L">
          <div className='Contact-Header'><h1>Contact Us:</h1></div>
          <div className="contact-details">
            <div className="contact-info" onClick={handlePhoneClick}>
              <AiOutlinePhone className="icon-form" />
              <div>
                <p>
                  <span>Phone:</span> +961 71 569 694
                </p>
              </div>
            </div>
            <div className="contact-info" onClick={handleEmailClick}>
              <AiOutlineMail className="icon-form" />
              <div>
                <p>
                  <span>Email:</span> example@example.com
                </p>
              </div>
            </div>
            <div className="contact-info" onClick={handleLocationClick}>
              <SlLocationPin className="icon-form" />
              <div>
                <p>
                  <span>Location:</span> Sinn el Fil, Jisr el Wati, Fattal street
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Contact-R">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className='input-fild'>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='contact-form-input'
              />
            </div>
            <div className='input-fild'>
              <label htmlFor="email">Email:</label>
              <input
                className='contact-form-input'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='input-fild'>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>


      </div>

    </div>
  );
};
