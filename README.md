# blockchain-developer-bootcamp-final-project
# NFT Browser, Minter, and (stretch goal) Exchange
My final project will be a simple web UI to explore, mint, and (if time allows) trade NFTs.
## Browse
- Anonymous users should be able to see the NFT holdings of an given address
- They should also be able to reverse lookup the holding address of a given NFT token.
## Mint
- Registered users should be able to mint an NFT
## Trade (if timeline allows)
- Registered users should be able purchase or list for sale of their NFT token


# Environment Setup
## Dependencies:
npm install @openzeppelin/contracts
yarn add @chainlink/contracts
yarn add dotenv



<!-- TODO -->
https://courses.consensys.net/courses/take/blockchain-developer-bootcamp-registration-2021/assignments/27500647-final-project-submission



// Events
// Does the shit work on Rinkeby?

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
   5.  instructions on:
      1. Installing dependencies for your project
      2. Running your smart contract unit tests
      3. how to populate .env
   6.  Screencast (loom)
      4. submitting transactions and seeing the updated state
10. Double check naming



