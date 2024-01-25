import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import userData from '../db.json'; // Import your user data

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Check if the username already exists in the database
    const userExists = userData.users.some((u) => u.username === username);
    if (userExists) {
      setError('Username already exists');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Save the new user data to the database (in memory for this example)
      const newUser = {
        id: (userData.users.length + 1).toString(),
        username,
        password,
        state: 'User'
      };
      userData.users.push(newUser);
      axios.post("http://localhost:9000/users" , {
        id: (userData.users.length + 1).toString(),
         username,
         password,
         state: 'User'
      }).then((data) => { console.log(data);});
      navigate('/home');

      // For demonstration purposes, you might want to write this data to db.json using a server in a real app

      // Clear form and show success message
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setError('');
      console.log('Registration successful', newUser);
    }
  };

  return (
    <div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className='reg-button' onClick={handleRegister}>Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
