Here are the design partern I've implemented:

1. Inheritance and Interfaces
It's inherenting openzeppelin's ERC721 and Ownable implementation and my own code that handles chainlink oracle
```
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Randomness.sol";
```
2. Oracles
I'm using Chainlink's Oracle for randomization to guarantee a fair mint.

3. Access Control Design Patterns
Many of the admin functions are owner only functions.

4. Upgradable Contracts
Many state variables can be updated after deploy. Some of the functions are:
setCost -- Owner can change the minting cost
setmaxMintAmount -- Owner can change the max amount of NFTs being minted at a time.
setNotRevealedURI -- Set the URI of the not revealed art asset.
setBaseURI -- set the URI of the not revealed art