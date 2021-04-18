import React, {Component} from 'react';
import CardList from './CardList'
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      characters: []
    }
    console.log(this.state)
  }

  componentDidMount(){
    async function getData(state){
      try
      {
        const rawData = await fetch(`https://swapi.dev/api/people/`)
        const data = await rawData.json();
        console.log(data);
        state.setState({characters: data.results});
        console.log('done!');
      }
      catch (e) {
        console.error('Unsuccessful at getData', e);
      }
    }

    getData(this);
  }

  render(){
    const {characters} = this.state;
    console.log(this.state);
    return(
    <div className="App">
      <h1>Hello</h1>
      <CardList array={characters}/>
    </div>
    )
  }
}

export default App;
