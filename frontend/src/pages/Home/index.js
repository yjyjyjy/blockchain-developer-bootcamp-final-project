import React from 'react';
import { Container } from 'react-bootstrap';
import NftInteractionCard from './NftInteractionCard';
import ConnectWalletModal from '../../components/ConnectWalletModal';
import useWalletConnectionModal from '../../hooks/useWalletConnectionModal';
import { StateInspector } from "reinspect"

const Home = () => {
  const { isWalletConnectModalOpen } = useWalletConnectionModal();
  return (
    <StateInspector name="App">
      <Container className="mt-5">
        {isWalletConnectModalOpen && <ConnectWalletModal />}
        <NftInteractionCard />
      </Container>
    </StateInspector>
  );
};

export default Home;
