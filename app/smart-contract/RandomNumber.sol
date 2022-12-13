pragma solidity ^0.8.17;

// Define a new contract named "RandomNumber"
contract RandomNumber {
    // Define a state variable to store the latest random number
    uint256 public latestRandomNumber;

    // Define a function named "update" that can be called by anyone
    // to update the latest random number
    function update(uint256 _newRandomNumber) public {
        // Set the latest random number to the new value
        latestRandomNumber = _newRandomNumber;
    }
}
