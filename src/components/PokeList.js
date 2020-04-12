import React from 'react';
import Pokemon from '../components/Pokemon';

const PokeList = (props) => {
  const items = props.pokesdata.map((pokedata, id) => {
    return <Pokemon key={id} pokedata={pokedata} />;
  });

  return <ul className='cardList'>{items}</ul>;
};

export default PokeList;
