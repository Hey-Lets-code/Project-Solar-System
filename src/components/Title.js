import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        { headline }
      </h2>
    );
  }
}
Title.propTypes = { // headline é o parâmetro, headline é obrigatório e tem que ser do tipo string
  headline: PropTypes.string.isRequired, // string: o PropTypes define o tipo de dado
};
export default Title;
