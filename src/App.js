import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //state is enkel in klasse-components

class App extends Component {
  state = {
    persons: [
      {name: 'Daan', age: 21, },
      {name: 'Rick', age: 49 },
      {name: 'Sara', age: 27}
    ],
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler= ()=> {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }
  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px', 
      cursor: 'pointer'

    }; // inline stylen in ReactJS

    return (
       <div className="App">
      <h1>Hello World,</h1>
      <h2>Click on the first line under the switch to revert to the normal state.</h2>
      <button style={style} 
      onClick={this.togglePersonsHandler}>Switch</button>

      {
        this.state.showPersons === true?<div>
      <Person
        name={this.state.persons[0].name} //weergeven van de 0-rij en de name-property 
        age={this.state.persons[0].age}
        click= {this.switchNameHandler.bind(this, "Cristiano Ronaldo")} //'this' wijst naar de klasse
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

      </div> :null 
    }
     
      </div> 
    );
    
  }
}

export default App;
