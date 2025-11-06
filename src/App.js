

import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="person-list">
        <Person 
          name="Alice Johnson" 
          title="HR Manager" 
          salary="$70,000" 
          phone="+1234567890" 
          email="alice@example.com" 
          animal="🐱" 
        />
        <Person 
          name="Bob Smith" 
          title="Recruiter" 
          salary="$50,000" 
          phone="+0987654321" 
          email="bob@example.com" 
          animal="🐶" 
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;




import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to HR App</h1>
      <p>This is your application running successfully!</p>
    </div>
  );
}

export default App;
