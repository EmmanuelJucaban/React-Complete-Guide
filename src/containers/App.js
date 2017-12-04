import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: 0, name: 'Oscar', age: 27},
      {id: 1, name: 'Frank', age: 28},
      {id: 2, name: 'Shane', age: 26}
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    let persons = null;
    let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return  <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(e) => this.nameChangedHandler(e, person.id)}/>
            //    alternative is this.deletePersonHandler.bind(this, index)
          } )}
        </div>
      );
      //We need classes.Red here instead of just the string 'Red' to actually use the App's Red class from the css file
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.App}>
          <h1>This is a React app!</h1>
          <p className={assignedClasses.join(" ")}>This is really working</p>
          <button
            className={btnClass}
            onClick={this.togglePersonHandler}>Toggle persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
