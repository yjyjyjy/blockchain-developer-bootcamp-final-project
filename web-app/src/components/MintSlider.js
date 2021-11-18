import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './Text';
import { colors } from '../theme';
// import Slider from 'react-input-slider';
// import Slider from 'react-bootstrap/slider';


const InputContainer = styled.div`
  border: 1px solid ${colors.green};
  border-radius: 8px;
  padding: 10px;
  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${colors.green};
    padding: 5px;
  }
`;


const MintSlider = ({ mintState, setMintState }) => {
  return (
    <div>
      <InputContainer>
        <Text color={colors.green}>How many do you want to mint?</Text>
        <div>
          {/* <Slider
            axis="x"
            xmin={1}
            xmax={10}
            x={mintState.mintAmount}
            onChange={({ x }) => setMintState(mintState => ({ ...mintState, mintAmount: x }))}
          /> */}
          ({mintState.mintAmount})
        </div>
      </InputContainer>
    </div>
  );
};

export default MintSlider;


