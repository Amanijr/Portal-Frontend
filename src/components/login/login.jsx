import React, { useState } from 'react';
import './login.css';
import Validation from './validation'; // Ensure the correct path to your Validation module
import { HashLink as Link } from 'react-router-hash-link';

const Login = () => {
  const [formValues, setFormValues] = useState({ Tin: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleValidation = (event) => {
    event.preventDefault();
    setErrors(Validation(formValues));
  };

  return (
    <div className="logform">
      <div className="form-box login">
        <form action="#" method="#" onSubmit={handleValidation}>
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
              <a href="#">Forgot password?</a>
            </label>
          </div>
          <button type="submit">log in</button>
          <div className="register-link">
            <Link smooth to ="#register">Don't Have a TIN?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
