import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //state is enkel in klasse-components

class App extends Component {
  state = {
    persons: [
      {name: 'Daan', age: 21, },
      {name: 'Rick', age: 49 },
      {name: 'Sara', age: 27}
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name: 'Amélie', age: 35},
        {name: 'Erik', age: 58}
      ]
    })
  }

  nameChangedHandler= (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 27},
        {name: 'Amélie', age: 35},
        {name: 'Erik', age: 58}
      ]
    })
  }
  render() {
    return (
       <div className="App">
      <h1>Hello World,</h1>
      <h2>Click on the first line under the switch to revert to the normal state.</h2>
      <button onClick={this.switchNameHandler.bind(this, "Lionel Messi")}>Switch</button>
      <Person
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click= {this.switchNameHandler.bind(this, "Cristiano Ronaldo")}
        changed={this.nameChangedHandler}>
      </Person>

      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}>
      </Person>


      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}>
      </Person>
     
      </div> 
    );
    
  }
}

export default App;
