import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const NUMBER_ONE = 1;
    const listOfAllMissions = [...missions].sort((firstElement, secondElement) => (
      firstElement.country > secondElement.country
        ? 1
        : -NUMBER_ONE));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div
          className="div-of-mission-card"
        >
          {listOfAllMissions
            .map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            ))}
        </div>
      </div>);
  }
}

export default Missions;
