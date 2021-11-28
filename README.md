# My eth account
Yes I very much like to receive the course certificate in NFT
> **0x769584f59f2aCdb84AD51118122B73Cb4414a661**

# Final Product Overview -- NFT Minting DApp
This is the front end and smart contract that allows the users to mint a collection of eye themed generative NFTs (called Deep Eye). There are three components in creating this project: a collection of NFT Art, a backend smart contract, and a frontend web app.
- Frontend URL: https://blockchain-developer-bootcamp-final-project-ivory.vercel.app/
- Deployed NFT Contract address on Rinkeby: https://rinkeby.etherscan.io/address/0x0476eC77191623e22D6B73dC43998a27997d435d
- OpenSea testnet gallery view: https://testnets.opensea.io/collection/deepeye-6wrcvmrnt5

### [Project Walk-through Video](https://www.youtube.com/watch?v=9XenfvP8qSI)
[![Project Walk-through](https://img.youtube.com/vi/9XenfvP8qSI/0.jpg)](https://www.youtube.com/watch?v=9XenfvP8qSI)


## The art
The collection images was generated using an open source NFT art engine called Hashlips. The code to generate the art is not my work, nor is it included in this submission. The art, along with the meta data was uploaded into the IPFS and pinned wtih Piniata. Only the hash of the meta data is included in the smart contract code. That's where my work starts.

## Smart contract
A smart contract is created to manage the state and life cycle functions of the NFTs.
- It is deployed on Rinkeby. Contract Address: 0x0476eC77191623e22D6B73dC43998a27997d435d
- Its mint function serves the minting logic.
- The TokenURI function serves the NFT meta data so NFT galleries like Open Sea can render the NFT art along with the traits.
- To avoid sophisticated users cherry-picking only the rare ones to mint, there is a hidden/reveal life cycle of the NFT. Initially during the minting period, all arts and meta data are hidden. A generic image showing "coming soon" will be shown if for the minted NFTs. After the minting period, assuming most, if not all NFTs are minted, the owner will call the reveal function, so the contract will point the NFTs to the real art and meta data.
- To further demonstrate that even the owner can't taken adventage of insider knowledge to cherry pick the rare ones, the owner will call getRandomNumber function in the Randomness.sol once to get a random integer between 1-100 from Chainlink's VRF oracle. The TokenIds will be shifted by this random number when mapping to the meta data. This guarantees that the mapping from NFT TokenId (determined by the order of which the NFTs are mint) to the NFT art and traits is verifiably random and unknown to everyone beforehand.
- There are also administrative functions so the contract owner can update the minting price, the base url of the meta data, pause the contract, or withdraw funds (both the Ethereum minting earnings and the un-used LINK token from the Chainlink VRF contract).

## Frontend Web App
A frontend web app was created and deployed to xxx so the users can mint the NFT. Through this web app:
- Users can connect to their ethereum wallet via Metamask (on Rinkeby only)
- Their Eth balance and the number of existing NFTs (Token Symbol EYE) will be shown
- The minting widget allows the user to choose the number of NFTs to mint (max 10 at a time)
- Minting cost set by the contract owner will be displayed
- Once the mint button is clicked, Metamask will prompt the user for payment and start the minting process

# File structure, environment setup, and run test
## File structure
```
-- nft_contract            // contract folder
   |-- artifacts
   |-- contracts           // core solidity code
   |-- data/abi            // abi
   |-- node_modules
   |-- script              // deploy script (and interaction script for dev purpose only)
   |-- test                // tests
-- web-app                 // frontend web app
   |-- public
   |-- src                 // core web app code folder
      |-- assets           // icons and abi
      |-- components
      |-- hooks
      |-- utils            // utility functions
   |-- node_modules
```

## Local environment setup
1. Clone the code base.
```
git clone git@github.com:yjyjyjy/blockchain-developer-bootcamp-final-project.git
```
2. Install dependencies:
```
cd blockchain-developer-bootcamp-final-project/web-app/ && yarn && cd ../nft_contract/ && yarn
```
3. Populate .env:

Under `nft_contract` folder (you should be there without navigating):
```
echo -e "BASE_URI=ipfs://QmZCCuNKGT9Y11r91aoXXj4hDZ8yAXL4UXB7iz5iQ3fGBa/\nHIDDEN_META_URI=ipfs://QmaAw1oqwKETsCK5AP2t5B3XieZH5vcwufFeB3tN2a7wJH/coming_soon.json\nRINKEBY_CONTRACT_ADDRESS=0x0476eC77191623e22D6B73dC43998a27997d435d
" > .env
```

## Run Test
Under `nft_contract/` folder:
```
npx hardhat test
```

## Mint NFTs on the deployed frontend
You will need some testing Rinkeby ETH

Here is a throw-away account with pre-loaded rinkeby ETH

- mnemonic:
submit spawn lounge smooth surprise gaze photo century bar story milk broccoli

- private key: 0xae831e96689548d92d4528844d4f01492f56f2bd3788630254fa52efd28acbaa