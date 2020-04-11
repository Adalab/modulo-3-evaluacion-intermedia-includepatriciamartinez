import React from 'react';

const Pokemon = (props) => {
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
};
export default Pokemon;
