import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';
import { injected } from '../connectors';
import { shortenAddress } from '../utils/shortenAddress';


import MMLogo from '../assets/metamask-logo.svg';
import { useNFT } from '../hooks/useNFT';

const MetamaskConnectButton = () => {
  const { activate, active, account, deactivate } = useWeb3React();
  const { setEthBalance, setNftBalance } = useAppContext();
  const { fetchEthBalance, fetchNFTBalance } = useNFT();
  const handleLogout = () => {
    deactivate()
    setEthBalance('--');
    setNftBalance('--');
  }

  const handleLogin = () => {
    activate(injected);
  }

  useEffect(() => {

  }, [account])

  if (active) {
    return (
      <div>
        {shortenAddress(account)}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleLogin}>Connect</button>
    </div>
  );
};

export default MetamaskConnectButton;