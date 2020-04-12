import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;

    const items = props.pokedata.types.map((type, id) => {
      return <li key={id}>{type}</li>;
    });

    return (
      <li className='card'>
        <img src={props.pokedata.url} alt='imagen pokemon'></img>
        <h2>{props.pokedata.name}</h2>

        <ul>{items}</ul>
      </li>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
};

export default Pokemon;
