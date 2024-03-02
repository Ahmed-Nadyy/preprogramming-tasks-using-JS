// Form.js

import React, { useState } from 'react';

const Form = (props) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(props).map((key, index) => {
        if (key !== 'children') {
          return (
            <div key={index}>
              <label htmlFor={key}>{key}:</label>
              <input 
                type="text" 
                id={key} 
                name={key} 
                value={formData[key] || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
          );
        }
        return null;
      })}
      {props.children}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
