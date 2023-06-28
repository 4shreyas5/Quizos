import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div>
        <Link to='/quiz'><button>Login with Temple Wallet</button></Link> 
    </div>
  );
};

export default Login;
