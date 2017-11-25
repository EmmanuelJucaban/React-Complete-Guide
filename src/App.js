import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a React app!</h1>
        <p>This is really working</p>
        <Person name={'Oscar'} age='26'/>
        <Person name={'Frank'} age='39'>
          My Hobbies: racing
        </Person>
        <Person name={'Shane'} age='27'/>
      </div>
    );
  }
}

export default App;
