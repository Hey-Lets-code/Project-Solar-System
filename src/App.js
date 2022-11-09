import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component { // ela é uma cópia do componente react
  render() {
    return (
      <div id="main">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
