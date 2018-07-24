import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots'; //we have to destructure js that aren't default
import './App.css';

class App extends Component { //this is a smart component

  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') //we make request to servers
    .then(response => response.json())
    .then(users => {this.setState({ robots: users})}) 
  }

  onSearchChange = (event) => { //we want to use this arrow syntax for every method we create within a class
    this.setState({searchfield: event.target.value}); 
  }

  render(){
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?  //we wanna make sure the client knows the rendering will take some time
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/> 
          </Scroll>   
        </div>
      );
    } 
}

export default App;