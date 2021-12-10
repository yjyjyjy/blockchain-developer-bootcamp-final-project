import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';
import { injected } from '../connectors';
import { shortenAddress } from '../utils/shortenAddress';
import MMLogo from '../assets/metamask-logo.svg';
import { useNFT } from '../hooks/useNFT';
import { colors } from '../theme';

const networkIdMapping = {
  1: "Eth Mainnet",
  3: "Eth Ropsten",
  4: "Eth Rinkeby",
  5: "Eth Görli",
  42: "Eth Kovan"
}

const MetamaskConnectButton = () => {
  const { activate, active, account, deactivate, chainId } = useWeb3React();
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
      <Row className='align-right'>
        <div>Network: <span className={active ? chainId === 4 ? "heavy-green" : "heavy-red" : ""}>{active ? chainId in networkIdMapping ? networkIdMapping[chainId] : "other" : '--'}</span></div>
      </Row >
      <Row className='align-right'>
        <div style={{ color: "red" }}>{active && chainId !== 4 && "Please switch to Rinkeby network to use the app"}</div>
      </Row>
      <div className='flex-row flex-end'>
        <img src={MMLogo} height="35" alt="Metamask Logo" />
        {active ?
          <Button variant="outline-primary" className='wallet-button' onClick={handleLogout}>Logout</Button>
          :
          <Button className='wallet-button' onClick={handleLogin}>Connect</Button>
        }
      </div>
    </div >
  );
};

export default MetamaskConnectButton;