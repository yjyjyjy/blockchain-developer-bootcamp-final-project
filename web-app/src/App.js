import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { AppContextProvider } from './AppContext';


import BalanceCard from './components/BalanceCard';
import MetamaskConnectButton from './components/MetamaskConnectButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <AppContextProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="App">
          <Container>
            <Row className='header-container'>
              <Col>
                <BalanceCard />
              </Col>
              <Col>
                <MetamaskConnectButton />
              </Col>
            </Row>
            <Row>
              <div>Body</div>
            </Row>
          </Container>
        </div>
      </Web3ReactProvider>
    </AppContextProvider>
  );
}

export default App;
