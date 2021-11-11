import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';
import { useAppContext } from '../AppContext';
import { useEffect } from 'react';

const useEth = () => {
  const { active, library, account } = useWeb3React();
  const { ethBalance, setEthBalance } = useAppContext();

  const fetchEthBalance = async () => {
    console.log('fetchEthBalance');
    if (library && active && account) {
      const balance = await library.getBalance(account);
      // better to do safe math operations
      setEthBalance(parseFloat(formatEther(balance)).toPrecision(4));
      console.log('SUCCESS')
    } else {
      setEthBalance('--');
      console.log('setnull')
    }
  };

  useEffect(() => {
    if (account) {
      fetchEthBalance();
    }
  }, [account]);

  return { ethBalance, fetchEthBalance };

};


export default useEth;
