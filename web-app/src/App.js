import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

import { AppContextProvider } from './AppContext';

import './App.css';
import BalanceCard from './components/BalanceCard';
import MetamaskConnectButton from './components/MetamaskConnectButton';




function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <AppContextProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="App">
          <div className="container">
            <div className="header-container">
              <div>
                <BalanceCard />
                <div>Mint NFT</div>
                <MetamaskConnectButton />
              </div>
            </div>
            <div className='body-container'>
              <div>Body</div>
            </div>
          </div>
        </div>
      </Web3ReactProvider>
    </AppContextProvider>
  );
}

export default App;
