import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
   persons: [
     { name: 'Oscar', age: 27},
     { name: 'Frank', age: 28},
     { name: 'Shane', age: 26}
   ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React app!</h1>
        <p>This is really working</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies: racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
