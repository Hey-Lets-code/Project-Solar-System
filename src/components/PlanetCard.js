import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetCard, planetImage, planetName } = this.props;
    return (
      <div>
        <div data-testid="planet-card">
          { planetCard }
          <p data-testid="planet-name">{ planetName }</p>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetCard: PropTypes.element.isRequired,
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.element.isRequired,
};

export default PlanetCard;
