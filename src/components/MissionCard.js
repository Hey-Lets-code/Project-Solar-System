import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const {
      name,
      year,
      country,
      destination,
    } = this.props;

    return (
      <div className="mission-card">
        <div
          data-testid="mission-name"
          // className="mission-card-line"
        >
          <h4
            className="h4-of-mission-name"
          >
            { name }
          </h4>
        </div>
        <div
          data-testid="mission-card"
          className="mission-card"
        >
          {/* {' '} */}
          <span
            data-testid="mission-year"
            className="mission-card-line"
          >
            { year }
          </span>
          {/* {' '} */}
          <span
            data-testid="mission-country"
            className="mission-card-line"
          >
            { country }
          </span>
          {/* {' '} */}
          <span
            data-testid="mission-destination"
            className="mission-card-line"
          >
            { destination }
          </span>
          {/* {' '} */}
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
