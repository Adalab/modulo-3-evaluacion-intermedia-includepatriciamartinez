import React from 'react';
import Pokemon from '././Pokemon';

const PokeList = (props) => {
  const items = props.pokesdata.map((pokedata, id) => {
    return <Pokemon key={id} pokedata={pokedata} />;
  });

  return (
    <ul className='cardList'>
      {items}
      {props.children}
    </ul>
  );
};

export default PokeList;
