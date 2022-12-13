# ipfs://QuantumRNG.crypto

## The need for VRNG

First and foremost, a verifiable random number generator (VRNG) ensures that the outcomes of random events within any web3 platform are truly random and cannot be manipulated or predicted by any party. This is crucial for applications that rely on randomness, such as online gaming, gambling, and lottery platforms. With a VRNG, users can trust that the outcomes of these applications are fair and unbiased, which is essential for maintaining the integrity of such platforms.

In addition to ensuring fairness, a VRNG also provides increased security for web3 applications. Since the randomness of the VRNG cannot be manipulated, it can be used as a source of unpredictable data that can be leveraged to strengthen the security of various systems. For example, VRNGs can be used to generate strong cryptographic keys that are essential for protecting sensitive information and preventing against cyber attacks.

Moreover, a VRNG can also improve the overall user experience on web3 platforms. By generating truly random outcomes, VRNGs can add an element of excitement and unpredictability to web3 applications, which can make them more engaging and enjoyable for users.

By ensuring fairness, increasing security, and improving the user experience, VRNGs play a crucial role in the success and growth of the decentralized web.

## Quantum Computers as a Source of Randomness

One of the key advantages of using quantum computers as a source of randomness is their inherent unpredictability. Quantum computers operate on the principles of quantum mechanics, which is a branch of physics that deals with the behavior of particles at the atomic and subatomic level. This means that quantum computers can generate truly random outcomes that cannot be predicted or manipulated by any party.

In contrast, traditional computers operate on the principles of classical mechanics, which is based on a set of deterministic laws that govern the behavior of particles. As a result, traditional computers are unable to generate truly random outcomes and must use algorithms or external sources of randomness to approximate randomness.

Additionally, quantum computers are capable of generating a large number of random bits at a very high speed, making them well-suited for applications that require a large amount of randomness. This makes quantum computers a particularly attractive option for use as a VRNG on web3 platforms.

Overall, the inherent unpredictability and high speed of quantum computers make them a particularly good source of randomness for web3 applications.

## Reduced Decentralisation

One potential issue with using quantum computers as a source of randomness for web3 applications is that it may create a dependency on a small number of quantum hardware providers. Since the development of quantum computers is still in its early stages, there are currently only a few companies that produce quantum hardware. This means that if web3 applications rely on quantum computers for VRNGs, they may be reliant on a small number of quantum hardware providers.

This dependency on a small number of providers could harm the decentralization of web3 platforms, as it may give these providers a significant amount of control over the generation of random numbers. This could potentially lead to issues such as centralization, lack of transparency, and potential bias in the generation of random numbers.

To mitigate this potential issue, web3 platforms could consider implementing a hybrid approach to random number generation that combines the use of quantum computers with other sources of randomness. For example, web3 platforms could use a combination of quantum computers, traditional computers, and external sources of randomness to generate random numbers. This would reduce the dependency on a small number of quantum hardware providers and help to maintain the decentralization of web3 platforms.

In addition, web3 platforms could also implement measures to ensure that the use of quantum computers for VRNGs is transparent and fair. For example, they could publish information about the quantum hardware providers that they use, as well as details about the algorithms and processes that are used to generate random numbers. This would help to increase transparency and promote trust in the VRNGs on web3 platforms.

Overall, while the use of quantum computers as a source of randomness for web3 platforms has many benefits, it is important to carefully consider the potential issues and take steps to mitigate them. By implementing a hybrid approach and promoting transparency, web3 platforms can ensure that the use of quantum computers for VRNGs is decentralized and fair.

## It's been done
API3 and The Australian National University (ANU) Quantum Optics Group have already [created an oracle for this purpose](https://api3.org/QRNG).

![Gif of George Harrison from the Beatles in the Simpsons mouthing "It's been done"](https://media.tenor.com/aFhfFNKcjGUAAAAS/george-harrison-beatles.gif)

## Creating a service

To host a QRNG service on the web, a number of different components are required. These include:

- Frontend: The frontend of the QRNG service would be the user interface that users interact with to access the service. This could be a website or a mobile app that allows users to generate and use random numbers. The frontend would need to be developed using web technologies such as HTML, CSS, and JavaScript, and it would need to be designed to be user-friendly and intuitive to use.
- Backend: The backend of the QRNG service would be the server-side components that handle the generation and distribution of random numbers. This could include algorithms that use quantum computers to generate random numbers, as well as databases to store and manage the generated numbers. The backend would need to be developed using a server-side programming language such as Python or Java, and it would need to be scalable and efficient to handle the high volume of requests that are likely to be generated by users.
- APIs: The QRNG service would also need to have APIs (Application Programming Interfaces) that allow other web3 applications to integrate with the service and use the generated random numbers. These APIs would need to be well-documented and easy to use, and they would need to provide a range of different functions for generating and using random numbers.
- Integrations: In addition to APIs, the QRNG service would also need to have integrations with other web3 platforms and services. For example, it could integrate with blockchain networks to enable the use of random numbers in smart contracts, or it could integrate with online gaming and gambling platforms to provide a source of randomness for these applications.

Overall, to host a QRNG service on the web, a combination of frontend, backend, APIs, and integrations would be required. By carefully designing and implementing these components, web3 developers can create a QRNG service that is reliable, secure, and user-friendly.

## Quantum Random Number Generation

```python
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister, execute, Aer

def random_bit_string(length: int) -> str:
    # Create a quantum circuit with one qubit and one classical bit
    qc = QuantumCircuit(QuantumRegister(1), ClassicalRegister(1))
    
    # Generate a random bit string by performing measurements on the qubit
    bit_string = ""
    for i in range(length):
        # Apply a Hadamard gate to the qubit, putting it into a superposition of 0 and 1
        qc.h(0)
        # Measure the qubit
        qc.measure(0, 0)
        # Execute the circuit and retrieve the result
        result = execute(qc, shots=99, backend=Aer.get_backend('aer_simulator')).result()
        # Get the measurement result
        bit = result.get_counts().most_frequent()
        # Append the result to the bit string
        bit_string += str(bit)
    
    return bit_string

def bit_string_to_number(bit_string: str) -> int:
    # Convert the binary string to an integer
    number = int(bit_string, 2)
    return number

# Generate a random bit string
bit_string = random_bit_string(10)
print(bit_string)  # e.g. "1101011001"

# Convert the bit string to a number
number = bit_string_to_number(bit_string)
print(number)  # e.g. 873
```

## Smart Contract

This contract allows anyone to call the "update" function and provide a new random number, which will be stored in the latestRandomNumber state variable.

 One potential use for such a contract is to create a decentralized random number generation service that can be used by other smart contracts. For example, a lottery contract could use this contract to generate random numbers to determine the winning ticket. Another use could be to create a decentralized prediction market that relies on random numbers to resolve bets.

```jsx
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
```
