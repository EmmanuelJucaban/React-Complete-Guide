import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] inside componentDidMount");
  }
  render() {
    console.log("[Persons.js] inside render");
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(e) => this.props.changed(e, person.id)}/>
    });
  }
}

export default Persons;