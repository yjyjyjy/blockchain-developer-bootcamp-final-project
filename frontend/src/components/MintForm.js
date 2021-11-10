
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-input-slider';


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