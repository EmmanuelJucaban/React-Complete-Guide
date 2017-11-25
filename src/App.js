import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
   persons: [
     { name: 'Oscar', age: 27},
     { name: 'Frank', age: 28},
     { name: 'Shane', age: 26}
   ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Oscar', age: 27},
        { name: 'Frank', age: 28},
        { name: 'Fook', age: 26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Oscar', age: 27},
        { name: event.target.value, age: 28},
        { name: 'Shane', age: 26}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>This is a React app!</h1>
        <p>This is really working</p>
        <button
            style={style}
            onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} >
          My Hobbies: racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
