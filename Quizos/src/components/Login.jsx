import React from 'react';
import { Link } from 'react-router-dom';
import { connectWallet, getAccount } from '../utils/wallet';
import { useState, useEffect } from 'react';

const Login = () => {
  const[account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  return (
    <div className='grid m-10'>
        {/* <Link to='/quiz'> */}
        {/* <Link to='/certificate'> */}
          <button onClick={onConnectWallet}>
          { account ? account : "Connect Wallet"}
          </button>
          {/* </Link>  */}
    </div>
  );
};

export default Login;
