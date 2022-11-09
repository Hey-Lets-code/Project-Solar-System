import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div
        data-testid="planet-card"
        className="individual-planet-card"
      >
        <div
          data-testid="planet-name"
          classeName="div-of-planet-name"
        >
          <span
            className="span-planet-name"
          >
            { planetName }
          </span>
        </div>
        <div
          className="planet-img"
        >
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ `individual-planet-img-${planetName}` }
          />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.element.isRequired,
};

export default PlanetCard;
