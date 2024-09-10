import React, { useState } from 'react';
import './login.css';
import Validation from './validation'; // Ensure the correct path to your Validation module
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';

const Login = () => {
  const [formValues, setFormValues] = useState({ Tin: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleValidation = (event) => {
    event.preventDefault();
    const validationErrors = Validation(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Assuming you have an endpoint for login in your Spring Boot backend
      axios.post('http://localhost:8081/api/v1/user/login', formValues)
        .then(response => {
          // Handle successful login here, e.g., store token, redirect, etc.
          navigate('/services'); // Redirect to dashboard on successful login
        })
        .catch(error => {
          // Handle login error here
          console.error('Login error', error);
        });
    }
  };

  return (
    <div className="logform">
      <div className="form-box login">
        <form onSubmit={handleValidation}>
          <h1>LOG IN</h1>
          <div className="Tin">
            <input
              type="text"
              name="Tin"
              id="Tin"
              placeholder="Tin Number"
              onChange={handleInput}
              required
            />
            {errors.Tin && <p style={{ color: 'red' }}>{errors.Tin}</p>}
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleInput}
              required
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
          <div className="remember forgot">
            <label>
              <input type="checkbox" />
              remember me
              <Link to="/forgot-password">Forgot password?</Link>
            </label>
          </div>
          <button type="submit">log in</button>
          <div className="register-link">
           <div> <HashLink smooth to="#register">Don't have an account</HashLink></div>
            <Link to ="/Tin">Don't Have a TIN?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
