import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component { // ela é uma cópia do componente react
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>);
  }
}

export default SolarSystem;
