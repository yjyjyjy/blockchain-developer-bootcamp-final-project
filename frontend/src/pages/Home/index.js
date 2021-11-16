import React from 'react';
import { Container } from 'react-bootstrap';
import NftInteractionCard from './NftInteractionCard';
import ConnectWalletModal from '../../components/ConnectWalletModal';
import useWalletConnectionModal from '../../hooks/useWalletConnectionModal';

const Home = () => {
  const { isWalletConnectModalOpen } = useWalletConnectionModal();
  return (
    <Container className="mt-5">
      {isWalletConnectModalOpen && <ConnectWalletModal />}
      <NftInteractionCard />
    </Container>
  );
};

export default Home;
