import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //state is enkel in klasse-components

class App extends Component {
  state = {
    persons: [
      {id:'da',name: 'Daan', age: 21, },
      {id: 'ri', name: 'Rick', age: 49 },
      {id: 'sar',name: 'Sara', age: 27}
    ],
    otherState: 'some other value',
    showPersons: false
    
  } //huidige status van de data 

  nameChangedHandler= (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    }); //variabele personIndex gaat this.state.persons laten zoeken naar index, 

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person; 

  this.setState( {persons: person} )
  }
 

  deletePersonHandler = (personIndex)=>{
    //met deze functie gaan we een persoon verwijderen 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //delete 1 person out of the array
    this.setState({persons: persons})
  }

  togglePersonsHandler= ()=> {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px', 
      cursor: 'pointer',
    

    }; // inline stylen in ReactJS

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>


          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            key = {person.id} //een key als sleutel van de persoon 
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id) }/>
          })} 


  
  
       
  
        </div> 
      );

      style.backgroundColor = "red";
    }
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); 
    }
    if(this.state.persons.length <= 1 ){
      classes.push('bold');
    }

    return (
      <StyleRoot>
       <div className="App">
      <h1>Hello World,</h1>
      <h2>Click on the first line under the switch to revert to the normal state.</h2>
      <p className={classes.join(' ')}>This is working!</p>
      <button style={style} 
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div> 
      </StyleRoot>
    );
    
  }
}

export default App;
