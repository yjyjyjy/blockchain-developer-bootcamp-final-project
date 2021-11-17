import React from 'react';
import { Container } from 'react-bootstrap';
import ConnectWalletModal from './ConnectWalletModal';
import MintCard from './MintCard';
import useWalletConnectionModal from '../hooks/useWalletConnectionModal';

const MintBoxBase = () => {
  const { isWalletConnectModalOpen } = useWalletConnectionModal();
  return (
    <Container className="mt-5">
      {isWalletConnectModalOpen && <ConnectWalletModal />}
      <MintCard />
    </Container>
  );
};

export default MintBoxBase;
