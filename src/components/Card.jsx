import React, { useState } from 'react';

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    }
  };

  return (
    <div>
      <form>
        <h2>Form.js - basics</h2>

        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default MyForm;
