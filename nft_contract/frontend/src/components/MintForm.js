
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-input-slider';
import { ethers } from "ethers";

const RINKEBY_CONTRACT_ADDRESS = '0x0476eC77191623e22D6B73dC43998a27997d435d';

const mint = async num => {
  console.log(`minting ${num}`);

  // try {
  //   if (!window.ethereum) {
  //     console.log("No crypto wallet found. Please install it.");
  //     throw new Error("No crypto wallet found. Please install it.")
  //   }

  //   // await window.ethereum.send("eth_requestAccounts");
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   ethers.utils.getAddress(addr);
  //   const tx = await signer.sendTransaction({
  //     to: addr,
  //     value: ethers.utils.parseEther(ether)
  //   });
  //   console.log({ ether, addr });
  //   console.log("tx", tx);
  //   setTxs([tx]);
  // } catch (err) {
  //   setError(err.message);
  // }
}

const connectWallet = async () => {
  console.log('connecting');
}

// Display: address, Amount of ether I have, which network
// Form: need # of nfts to mint, > mint
// mint: function
// need error handling
// (nice to have) need state display for the transaction
const MintForm = props => {

  const [formData, setFormData] = useState({ numberToMint: 3 });



  const onSubmit = e => {
    e.preventDefault();
    console.log(formData)
  }
  return (
    <form onSubmit={e => onSubmit(e)}>
      <p>Hello Bitch!</p>
      <div>{formData.numberToMint}</div>
      <div>
        <Slider
          axis="x"
          xmin={1}
          xmax={10}
          x={formData.numberToMint}
          onChange={({ x }) => setFormData(formData => ({ ...formData, numberToMint: x }))}
        />

      </div>
      <input type="submit" value="Mint" />
    </form>
  );
};

MintForm.propTypes = {

};

export default MintForm;