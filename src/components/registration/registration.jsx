import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './registration.css'; // Import your stylesheet

// Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(10, 'Password must be at least 10 characters')
    .matches(/[a-zA-Z]/, 'Password must contain both letters and numbers')
    .matches(/[0-9]/, 'Password must contain both letters and numbers')
    .matches(/[\W_]/, 'Password must contain a special character')
    .required('Password is required'),
  tin: Yup.string().required('TIN is required'),
  nin: Yup.string().required('NIN is required')
});

const RegistrationForm = () => {
  const handleSubmit = async (values) => {
    try {
      await axios.post('http://localhost:8080/api/save', values);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          tin: '',
          nin: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="tin">TIN</label>
            <Field type="text" id="tin" name="tin" />
            <ErrorMessage name="tin" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="nin">NIN</label>
            <Field type="text" id="nin" name="nin" />
            <ErrorMessage name="nin" component="div" className="error" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
