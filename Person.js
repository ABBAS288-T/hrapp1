
import React from 'react';
import './Person.css';

function Person({ name, title, salary, phone, email, animal }) {
  return (
    <div className="person-card">
      <div className="person-animal">{animal}</div>
      <h2>{name}</h2>
      <p>{title}</p>
      <p>Salary: {salary}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Person;
