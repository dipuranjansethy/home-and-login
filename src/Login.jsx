import React, { useState } from 'react';
import './App.css';
import './login.css'

const App = () => {
  const [username, setUsername] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [file, setFile] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePanNumberChange = (e) => {
    setPanNumber(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', { username, panNumber, file });
  };

  return (
    <div className="login-container card">
      <form onSubmit={handleSubmit}>
        
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} required />
        </label>

        <label>
          PAN Number:
          <input type="text" value={panNumber} onChange={handlePanNumberChange} required />
        </label>

        <label>
          Upload File:
          <input type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png, .pdf" required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
      </form>
    </div>
  );
};

export default App;
