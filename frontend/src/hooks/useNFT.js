import { useContract } from './useContract';
import nftABI from '../static/nftABI';
import useIsValidNetwork from '../hooks/useIsValidNetwork';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';
import { useEffect } from 'react';
import { formatEther } from '@ethersproject/units';
import useEth from './useEth';


export const useNFT = () => {
  const { account } = useWeb3React();
  const { isValidNetwork } = useIsValidNetwork();
  const nftContractAddress = '0x0476eC77191623e22D6B73dC43998a27997d435d'; // rinkeby contract address
  const nftContract = useContract(nftContractAddress, nftABI);
  const { setTxnStatus, setNftBalance, setMintCost } = useAppContext();
  const { fetchEthBalance } = useEth();

  const fetchNFTBalance = async () => {
    try {
      const balance = await nftContract.balanceOf(account)
      const symbol = await nftContract.symbol()
      const balString = balance.toNumber().toString() + ' ' + symbol;
      setNftBalance(balString)
    } catch (error) {
      console.log('err: fetchNFTBalance')
      setTxnStatus('ERROR');
      console.log(error)
    }
  }

  const fetchNftCost = async () => {
    try {
      const costRaw = await nftContract.cost();
      const cost = parseFloat(formatEther(costRaw)).toPrecision(4);
      setMintCost(cost);
    } catch (error) {
      console.log('err: fetchNftCost')
      setTxnStatus('ERROR');
      console.log(error)
    }
  }

  const mint = async (amount) => {
    if (account && isValidNetwork && Number.isInteger(amount)) {
      try {
        setTxnStatus('LOADING');
        const txn = await nftContract.mint(amount);
        await txn.wait(1);
        setTxnStatus('COMPLETE');
        fetchNFTBalance();
        fetchEthBalance();
      } catch (error) {
        console.log('err: mint')
        setTxnStatus('ERROR');
        console.log(error)
      }
    }
  };

  useEffect(() => {
    if (account) {
      fetchNFTBalance();
    }
  }, [account]);

  useEffect(() => {
    if (account) {
      fetchNftCost();
    }
  }, [account]);
  return {
    fetchNFTBalance,
    fetchNftCost,
    mint
  };
};
