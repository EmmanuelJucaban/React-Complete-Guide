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

  componentWillReceiveProps(nextProps) {
    console.log("[Update Persons.js] inside componentWillReceiveProps", nextProps);
  }
  // this method should return true or false
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Update Persons.js] inside shouldComponentUpdate", nextProps, nextState);
    // Do not hard code true or false here.
    // Instead check that based on upcoming props or next state
    // This only returns true because we used an immutable approach of updating the persons array
    // This only checks the pointers/ root objects
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("[Update Persons.js] inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[Update Persons.js] inside componentDidUpdate");
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