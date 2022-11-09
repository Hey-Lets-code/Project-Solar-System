import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component { // ela é uma cópia do componente react
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="all-planets-cards">
          {planets
            .map(({ name, image }) => (
              <PlanetCard planetName={ name } planetImage={ image } key={ name } />
            ))}
        </div>
      </div>);
  }
}

export default SolarSystem;
