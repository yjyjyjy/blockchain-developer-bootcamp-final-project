import React from 'react';
import { useAppContext } from '../AppContext'

const BalanceCard = () => {
  const { ethBalance, nftBalance } = useAppContext();
  return (
    <div className='balance-card'>
      <div>
        ETH balance: {ethBalance}
      </div>
      <div>
        NFT balance: {nftBalance}
      </div>
    </div>
  );
};

export default BalanceCard;