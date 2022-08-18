import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component { // ela é uma cópia do componente react
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
