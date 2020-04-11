import React from 'react';
import pokesdata from '../data/pokesdata.json';
import '../stylesheet/App.css';
import PokeList from '../components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeData: pokesdata,
    };
  }

  render() {
    return (
      <div className='App__container'>
        <h1 className='App__title'>PoKEMON</h1>
        <PokeList pokesdata={this.state.pokeData} />
      </div>
    );
  }
}
export default App;
