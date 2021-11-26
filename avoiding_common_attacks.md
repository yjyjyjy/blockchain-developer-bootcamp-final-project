1. Proper Use of Require, Assert and Revert
Require was implemented in several locations in DeepEye.sol and Randomness.sol
2. Use Modifiers Only for Validation
I'm only using the Ownable modifier that was implemented by OpenZepplin
3. Checks-Effects-Interactions
There is no state changes after external calls

SWC avoided
[CWE-330: Use of Insufficiently Random Values](https://cwe.mitre.org/data/definitions/330.html)
This was avoided by using Chainlink's oracle.

[CWE-284: Improper Access Control](https://cwe.mitre.org/data/definitions/284.html)
The withdraw of the mint earning and Chainlink funds are protected by onlyOwner modifier