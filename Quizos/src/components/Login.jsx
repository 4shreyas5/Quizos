import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connectWallet, getAccount } from './wallet';


const Login = () => {
const [account, setAccount] = useState("");

useEffect(() => {
  (async () =>{
  setAccount("");
})();
},[]);
const onConnectWallet = async () =>{
    await connectWallet();
    const activeAccount = await getAccount();
    setAccount(activeAccount);
  };
  return (
    <div>
      <Link to='/quizselection'>
      <button onClick={onConnectWallet}>Login </button>

      </Link>
    </div>
  );
};

export default Login;
