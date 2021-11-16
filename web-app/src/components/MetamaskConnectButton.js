import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';
import { injected } from '../connectors';
import { shortenAddress } from '../utils/shortenAddress';


import MMLogo from '../assets/metamask-logo.svg';

// const MetamaskLogo = styled.img.attrs({
//   src: MMLogo,
// })`
//   height: 40px;
// `;


const MetamaskConnectButton = () => {
  const { activate, active, account, deactivate } = useWeb3React();
  const { setEthBalance, setNftBalance } = useAppContext();
  const handleLogout = () => {
    deactivate()
    setEthBalance('--');
    setNftBalance('--');
  }

  const handleLogin = () => {
    activate(injected);
  }

  // if (active) {
  //   return (
  //     <Card className="d-flex flex-row justify-content-between" style={{ width: 350 }}>
  //       {/* <MetamaskLogo /> */}
  //       <Text uppercase color="green" t3 lineHeight="40px" className="mx-4">
  //         {shortenAddress(account)}
  //       </Text>
  //       <ConnectBtn onClick={handleLogout}>Log Out</ConnectBtn>
  //     </Card>
  //   );
  // }

  if (active) {
    return (
      <div>
        {shortenAddress(account)}

      </div>
    );
  }

  return (
    // <Card className="d-flex flex-row justify-content-between" style={{ width: 350 }}>
    //   {/* <MetamaskLogo /> */}
    //   <Text uppercase color="green" t3 lineHeight="40px" className="mx-2">
    //     Metamask
    //   </Text>
    <div>
      <div>{shortenAddress('0x769584f59f2aCdb84AD51118122B73Cb4414a661')}</div>
      <button onClick={handleLogin}>Connect</button>
    </div>
    // </Card>
  );
};

export default MetamaskConnectButton;