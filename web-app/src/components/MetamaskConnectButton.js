import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
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


  return (
    <div className='flex-column'>
      <Row className='align-right'>
        <div>Wallet Address: {active ? shortenAddress(account) : '--'}</div>
      </Row>
      <div className='flex-row flex-end'>
        <img src={MMLogo} height="35" alt="Metamask Logo" />
        {active ?
          <Button variant="outline-primary" className='wallet-button' onClick={handleLogout}>Logout</Button>
          :
          <Button className='wallet-button' onClick={handleLogin}>Connect</Button>
        }
      </div>
    </div>
  );
};

export default MetamaskConnectButton;