import { useContract } from './useContract';
import nftABI from '../static/nftABI';
import useIsValidNetwork from '../hooks/useIsValidNetwork';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';
import { formatUnits, parseEther } from '@ethersproject/units';
import { useEffect } from 'react';

export const useNFT = () => {
  const { account } = useWeb3React();
  const { isValidNetwork } = useIsValidNetwork();
  const nftContractAddress = '0x0476eC77191623e22D6B73dC43998a27997d435d'; // rinkeby contract address
  const nftContract = useContract(nftContractAddress, nftABI);
  const { setCTokenBalance, setExchangeRate, setTxnStatus, cTokenBalance, exchangeRate } = useAppContext();

  // const fetchCTokenBalance = async () => {
  //   const cTokenBalance = await cTokenContract.balanceOf(account);
  //   setCTokenBalance(formatUnits(cTokenBalance, 8));
  // };

  // const getCTokenExchangeRate = async () => {
  //   try {
  //     let exchangeRateCurrent = await cTokenContract.callStatic.exchangeRateCurrent();
  //     exchangeRateCurrent = exchangeRateCurrent / Math.pow(10, 18 + 18 - 8);
  //     setExchangeRate(exchangeRateCurrent);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const mint = async (amount) => {
    if (account && isValidNetwork && Number.isInteger(amount)) {
      console.log("💎💎💎 mint 💎💎💎", amount)
      try {

        setTxnStatus('LOADING');
        console.log("LLLLL")
        console.log(nftContract.signer)
        const txn = await nftContract.mint(amount);
        // const txn = await nftContract.Owner();

        await txn.wait(1);
        setTxnStatus('COMPLETE');
      } catch (error) {
        setTxnStatus('ERROR');
        console.log(error)
      }
    }
  };

  // useEffect(() => {
  //   if (account) {
  //     getCTokenExchangeRate();
  //   }
  // }, [account]);

  return {
    // cTokenBalance,
    // exchangeRate,
    // getCTokenExchangeRate,
    // fetchCTokenBalance,
    mint
  };
};
