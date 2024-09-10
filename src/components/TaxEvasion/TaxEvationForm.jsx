import React, { useState } from 'react';
import './TaxEvasionForm.css';

const TaxEvasionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    details: '',
    imageEvidence: null,
    pdfEvidence: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <form className="tax-evasion-form" onSubmit={handleSubmit}>
      <h2>Report Tax Evasion</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="contact">Contact Information:</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />

      <label htmlFor="details">Details of Suspected Tax Evasion:</label>
      <textarea
        id="details"
        name="details"
        value={formData.details}
        onChange={handleChange}
        required
      />

      <label htmlFor="imageEvidence">Upload Image Evidence :</label>
      <input
        type="file"
        id="imageEvidence"
        name="imageEvidence"
        accept="image/*"
        onChange={handleChange}
      />

      <label htmlFor="pdfEvidence">Upload PDF Evidence:</label>
      <input
        type="file"
        id="pdfEvidence"
        name="pdfEvidence"
        accept="application/pdf"
        onChange={handleChange}
      />

      <button type="submit">Submit Report</button>
    </form>
  );
};

export default TaxEvasionForm;
