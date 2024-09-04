import React from 'react';
import './hero.css';
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>Karibu Mwananchi</h1>
        <p>Mfumo wa Walipa kodi nchini</p>
        <p>Kama una TIN namba bonyeza hapa chini</p>
        <Link smooth to="#login">
          <button className='btn'>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
