import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { ArrowDown } from 'react-bootstrap-icons';
import { useAppContext } from '../AppContext';
import Spinner from 'react-bootstrap/Spinner';
// import { Card } from 'react-bootstrap';
// import Text from '../../components/Text';
import Card from './Cards';
// import { colors } from '../../theme';
// import { useCToken } from '../../hooks/useCToken';
// import useEth from '../../hooks/useEth';
// import useTransaction from '../../hooks/useTransaction';
// import BalanceInput from '../../components/BalanceInput';

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
  const [depositAmount, setDepositAmount] = useState(0);
  // const { deposit, cTokenBalance, exchangeRate } = useCToken();
  // const { ethBalance } = useEth();
  const { txnStatus, setTxnStatus } = useAppContext();
  // const handleDepositSubmit = () => deposit(depositAmount);
  // const convertedAmount = useMemo(() => Number(depositAmount / exchangeRate).toFixed(4), [depositAmount, exchangeRate]);

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
          {/* <Text block center className="mb-5"> */}
          Txn Was successful!
          {/* </Text> */}
          <Button onClick={() => setTxnStatus('NOT_SUBMITTED')}>Go Back</Button>
        </Card>
      </Container>
    );
  }

  if (txnStatus === 'ERROR') {
    return (
      <Container show>
        {/* <Card style={{ maxWidth: 420, minHeight: 400 }}>
          <Text>Txn ERROR</Text>
          <Button onClick={() => setTxnStatus('NOT_SUBMITTED')}>Go Back</Button>
        </Card> */}
      </Container>
    );
  }
  return (
    <Container show>
      <Card style={{ maxWidth: 420, minHeight: 400 }}>
        {/* <Text block t2 color={colors.green} className="mb-3"> */}
        Deposit
        {/* </Text> */}
        {/* <BalanceInput balance={ethBalance} value={depositAmount} setValue={setDepositAmount} currency="eth" /> */}
        {/* <ArrowDown color={colors.green} size={36} style={{ margin: '1rem auto' }} /> */}
        {/* <BalanceInput balance={cTokenBalance} value={convertedAmount} currency="cToken" title="To" /> */}
        <Button variant="outline-dark" disabled={depositAmount <= 0} className="mt-3" onClick={() => { }}>
          Deposit {depositAmount} ETH
        </Button>
      </Card>
    </Container>
  );
};

export default MintCard;
