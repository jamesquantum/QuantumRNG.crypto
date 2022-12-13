from flask import Flask, request, Response
import json
from flask_cors import CORS
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister, execute, Aer

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def generate_random_number() -> str:
    # Get the length of the random number to generate from the request body
    print(request.json)
    length = request.json['length']
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

    # Generate a random bit string
    print(bit_string)  # e.g. "1101011001"

    # Convert the bit string to a number
    number = int(bit_string, 2) # e.g. 873

    resp = Response(json.dumps({'random_num': number}))
    resp.headers['Access-Control-Allow-Origin'] = '*' 
    resp.headers['Access-Control-Allow-Methods'] = 'POST'

    return resp

if __name__ == '__main__':
    app.run(host='0.0.0.0')