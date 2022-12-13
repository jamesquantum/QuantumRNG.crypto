import React from 'react';
import MarkdownViewer from './Components/MarkdownViewer';
import RandomNumberGenerator from './Components/RandomNumberGenerator';



function App() {
  return (
    <div>
      <RandomNumberGenerator />
      <MarkdownViewer markdownUrl="https://raw.githubusercontent.com/jamesquantum/QuantumRNG.crypto/main/README.md" />

    </div>
  );
}
export default App;