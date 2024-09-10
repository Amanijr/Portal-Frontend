// src/components/TinForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './TinForm.css';

// import images
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'


const TinForm = () => {
  const [lastName, setLastName] = useState('');
  const [nin, setNin] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/check-and-generate', {
        lastName: lastName,
        nin: nin
      });
      setResult(response.data);
      setError('');
    } catch (err) {
      setError(err.response ? err.response.data : 'Error connecting to the server');
      setResult('');
    }
  };

  const slideImages = [
    image1,
    image2,
    image3,
    image4
  ];

  return (
    <div className="Tin-container">
      <div className="slide-container">
        <Slide>
          {slideImages.map((image, index) => (
            <div className="each-slide" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slide>
      </div>
      <div className="Tin-content">
        <h2>TIN Generator</h2>
        <form onSubmit={handleSubmit} className='Tin'>
          <div>
            <label>Last Name:</label>
            <input className='tin' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div>
            <label>NIN:</label>
            <input type="text" value={nin} onChange={(e) => setNin(e.target.value)} required />
          </div>
          <button type="submit">Generate TIN</button>
        </form>
        {result && <div><h3>Generated TIN: {result}</h3></div>}
        {error && <div><h3 style={{ color: 'red' }}>{error}</h3></div>}
      </div>
    </div>
  );
};

export default TinForm;
