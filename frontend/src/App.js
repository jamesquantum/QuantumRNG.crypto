import React from 'react';
import MarkdownViewer from './MarkdownViewer';
import RandomNumberGenerator from './RandomNumberGenerator';



function App() {
  return (
    <div>
      <RandomNumberGenerator />
      <MarkdownViewer markdownUrl="https://raw.githubusercontent.com/jamesquantum/QuantumRNG.crypto/main/README.md" />

    </div>
  );
}
export default App;