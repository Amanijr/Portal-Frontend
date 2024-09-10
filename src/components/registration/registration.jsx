import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './registration.css'; // Import your stylesheet
import { Navigate } from 'react-router-dom';

// Validation Schema
const validationSchema = Yup.object({
  firstname: Yup.string().required('First Name is required'),
  lastname: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .matches(/[a-zA-Z]/, 'Password must contain both letters and numbers')
    .matches(/[0-9]/, 'Password must contain both letters and numbers')
    .matches(/[\W_]/, 'Password must contain a special character')
    .required('Password is required'),
  tin: Yup.string().required('TIN is required'),
  nin: Yup.string().required('NIN is required')
});

const RegistrationForm = () => {
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post('http://localhost:8081/api/v1/user/register', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed! Please check the console for details.');
    } finally {
      setSubmitting(false);
    }
  };

  if (registrationSuccess) {
    return <Navigate to="#login" />;
  }

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          tin: '',
          nin: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <Field type="text" id="firstname" name="firstname" />
              <ErrorMessage name="firstname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <Field type="text" id="lastname" name="lastname" />
              <ErrorMessage name="lastname" component="div" className="error" />
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

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
