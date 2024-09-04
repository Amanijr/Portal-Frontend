import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar } from '../components/Navbar/navbar'
import Hero from '../components/hero/hero';
import Login from '../components/login/login';
import RegistrationForm from '../components/registration/registration';


function Home () {
  return (
    
    <div className='App'>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portal</title>
      </Helmet>

      <Navbar />

      {/* Define ID attributes for each section to allow hash linking */}
      <div id="hero">
        <Hero />
      </div>

      <div id="login">
        <Login />
      </div>

      <div id="register">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Home;
