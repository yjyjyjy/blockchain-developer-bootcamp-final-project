import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useAppContext } from '../AppContext';
import Spinner from 'react-bootstrap/Spinner';
import Text from './Text';
import Card from './Cards';
import { colors } from '../theme';
import MintSlider from './MintSlider';
import { useNFT } from '../hooks/useNFT';
import { useWeb3React } from '@web3-react/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  overflow: hidden auto;
  z-index: 1;
`;

const MintCard = () => {
  const { txnStatus, setTxnStatus } = useAppContext();
  const [mintState, setMintState] = useState({ mintAmount: 3 })
  const { mint } = useNFT();
  const { account } = useWeb3React();
  const { mintCost, isOwner } = useAppContext();

  const handleMintSubmit = () => {
    mint(mintState.mintAmount);
  }

  if (txnStatus === 'LOADING') {
    return (
      <Container show>
        <Card style={{ maxWidth: 420, minHeight: 400 }}>
          <Spinner animation="border" role="status" className="m-auto" />
        </Card>
      </Container>
    );
  }

  if (txnStatus === 'COMPLETE') {
    return (
      <Container show>
        <Card style={{ maxWidth: 420, minHeight: 400 }}>
          <Text block center className="mb-5">
            Txn Was successful!
          </Text>
          <Button onClick={() => setTxnStatus('NOT_SUBMITTED')}>Go Back</Button>
        </Card>
      </Container>
    );
  }

  if (txnStatus === 'ERROR') {
    return (
      <Container show>
        <Card style={{ maxWidth: 420, minHeight: 400 }}>
          <Text>Txn ERROR</Text>
          <Button onClick={() => setTxnStatus('NOT_SUBMITTED')}>Go Back</Button>
        </Card>
      </Container>
    );
  }
  return (
    <Container show>
      <Card style={{ maxWidth: 420, minHeight: 400 }}>
        <Text block t2 color={colors.green} className="mb-3">
          Mint Awesome NFT
        </Text>
        <MintSlider mintState={mintState} setMintState={setMintState} />
        <Text>
          Price: {isOwner ? 0 : (mintCost / 10 ** 18).toString()} ETH per NFT
        </Text>
        <Text>
          Total Cost: {isOwner ? 0 : (mintCost * mintState.mintAmount / 10 ** 18).toString()} ETH
        </Text>
        <Button
          variant="outline-dark"
          disabled={
            mintState.mintAmount <= 0 ||
            mintState.mintAmount > 10 ||
            !account
          }
          className="mt-3"
          onClick={handleMintSubmit}>
          Mint {mintState.mintAmount} NFT(s)
        </Button>
      </Card>
    </Container>
  );
};

export default MintCard;
