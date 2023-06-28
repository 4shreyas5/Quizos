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
        <button onClick={onConnectWallet}>Login with Temple Wallet</button>
    </div>
  );
};

export default Login;
