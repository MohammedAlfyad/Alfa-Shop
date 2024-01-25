import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import '../css/login.css';
// import img from '../Img/login.jpg';
import login from '../animation/login.json'
import userData from '../db.json';
import Register from './Register.js';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true); // State to track the current form
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = userData.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      if(username === 'Alfyad' && password === '123')
      {
        setError('');
        navigate('/adminHome');
      }else {
        setError('');
        navigate('/home');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();

  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setError(''); 
  };

  return (
    <>
      <div className='login'>
        <div className='side-1'>
        <Lottie animationData={login} />
        </div>
        <div className='side-2'>
          <h2 className='login-title'> {isLoginForm ? 'Login' : 'Register'} Account </h2>
          {isLoginForm ? (
            <form className='form' onSubmit={handleLogin}>
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
              <div className='switch'>
                <button type='submit'>Login</button>
                <button type='button' onClick={toggleForm}>
                  Register
                </button>
              </div>
            </form>
          ) : (
            <form className='form' onSubmit={handleRegistration}>
              <Register/>
              <div className='switch'>
                <button type='button' className='back' onClick={toggleForm}>
                  Back to Login
                </button>
              </div>
            </form>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
}

export default Login;
