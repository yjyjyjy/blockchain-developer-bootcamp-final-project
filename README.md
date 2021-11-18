# NFT Minting Dapp
This is the front end and smart contract that allows the users to mint a collection of eye themed generative NFTs (called Deep Eye). There are three components in creating this project: a collection of NFT Art, a backend smart contract, and a frontend web app.

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

# File structure and environment setup
## Local environment setup to run the code
- Clone the code base.
```
git clone ....
```
- Install dependencies: Run `yarn` in each of the two folders under root folder (web-app, and nft_contract).
- Populate .env: create a .env file under nft_contract folder and fill in the following credentials:
  - RINKEBY_END_POINT= < You need to create a project on Infura and put the end point here >
  - RINKEBY_PROJECT_ID= < your Infura project ID >
  - DEV_ACCOUNT_PRIVATE_KEY= < Your metamask account private key >
  - RINKEBY_CONTRACT_ADDRESS=0x0476eC77191623e22D6B73dC43998a27997d435d
- Fund your wallet with some Rinkeby ETH and Rinkeby LINK token.
## File structure
### NFT smart contract
The code is under the nft_contract folder.
- **contracts folder**: this is where the contract source code is stored. The main contract is under DeepEye.sol. It contains the main logic of the NFT contract including minting, RUI serving, reveal and other admin function. Randomness.sol is a Chainlink oracle consumer contract where it requests and receives a random integer and store that to the contract state so the mapping between tokenId and meta data URI can be randomized.
- **test folder**: this is where the tests are stored. The test is written in Hardhat. The purpose and expected outcome of each test is explained in the code. (Assuming that the `HH` shorthand is installed), to run the test simply run
```
hh test
```
- **script folder**: `deploy.js` manages the deployment of the contract. `interact.js` is file created during development to quickly interact with the deployed contract. It has no production value. After each deployment, the ABI will be saved under **data/abi folder**


To deploy locally on to Hardhat's local network
```
hh run deploy
```
To deploy to Rinkeby test net
```
hh run deploy --network -rinkeby
```

### Frontend web-app
The source code is under web-app folder. Folder structure:
- **assets** static assets including abi and icon images
- **components** react components
- **hooks** custom hooks
- **utils** utilities
- AppContext.js -> This is where the app state is managed
- connectors.js -> manages the injected connector.
- theme.js -> some custom theme

# Design Patterns and security considerations:
## Design patters:
1. Oracles
2. Inheritance
3. Access Control
4. Upgradable Contract

## Security considerations:
1. Avoid re-entrancy attack
2. primoritize pull over push




# Index

## Dependencies:
npm install @openzeppelin/contracts
yarn add @chainlink/contracts
yarn add dotenv
install hardhat
install hardhat shorthand

### Front end
npm install create-react-app
npx create-react-app frontend
npm install --save web3
npm install react-bootstrap bootstrap\
yarn add --dev hardhat-abi-exporter


<!-- TODO -->
https://courses.consensys.net/courses/take/blockchain-developer-bootcamp-registration-2021/assignments/27500647-final-project-submission


1. Hide sensitive information
    1.  Metamast mnemonics, private keys >> .env
2. Frontend:
   1.  Detects the presence of MetaMask
   2.  Connects to the current account
   3.  Displays information from your smart contract
   4.  Allows a user to submit a transaction to update smart contract state
   5.  Updates the frontend if the transaction is successful or not
3. two design patterns: https://docs.google.com/document/d/1tthsXLlv5BDXEGUfoP6_MAsL_8_T0sRBNQs_1OnPxak/edit
4. Security: Protect against two attack vectors
5. Inherits: Double check
6. Test: At least 5 unit tests. With code explaining what they do, what to expect.
7. Contain a deployed_address.txt file which contains the testnet address and network where your contract(s) have been deployed

8.  Comments in code. Spec: https://docs.soliditylang.org/en/latest/natspec-format.html
9.  README.md file
   1. describes the project
   2. describes the directory structure
   3. where the frontend project can be accessed
   4. Ethereum account for NFT certificate
   5. instructions on:
      1. Installing dependencies for your project
      2. Running your smart contract unit tests
      3. how to populate .env
   6.  Screencast (loom)
      4. submitting transactions and seeing the updated state
10. Double check naming



