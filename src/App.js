import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
   persons: [
     { id: 0, name: 'Oscar', age: 27},
     { id: 1, name: 'Frank', age: 28},
     { id: 2, name: 'Shane', age: 26}
   ],
    otherState: 'Some other value',
    showPersons: false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Oscar', age: 27},
        { name: event.target.value, age: 28},
        { name: 'Shane', age: 26}
      ]
    })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [ ...this.state.persons ];
    persons.splice(personIndex, 1);
    this.setState({persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={ () => this.deletePersonHandler(index)}/>
          //    alternative is this.deletePersonHandler.bin(this, index)
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>This is a React app!</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch name</button>
        {persons}
      </div>
  );
  }
}

export default App;
