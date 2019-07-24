import React from 'react';
import Navbar from '../Navbar';
import Vet from '../Vet';

import './App.css';

const App = () => (
  <div className="App">
    <Navbar/>

    <main className="App__Main">
      <div className="App__Main__Row">
        <Vet />
      </div>
    </main>
  </div>
);

export default App;
