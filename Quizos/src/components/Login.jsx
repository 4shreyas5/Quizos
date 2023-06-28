import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'; // Import the CSS file from the style folder

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome to Quizos</h1>
      <p>Please login to proceed.</p>
      <Link to="/quiz" className="login-button">
        Login with Temple Wallet
      </Link>
    </div>
  );
};

export default Login;
