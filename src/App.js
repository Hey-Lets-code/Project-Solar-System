import React from 'react';
import Header from './components/Header';

class App extends React.Component { // ela é uma cópia do componente react
  render() {
    return (
      <div>
        <Header />
        <p>Andreza me elogiou</p>
      </div>
    );
  }
}

export default App;
