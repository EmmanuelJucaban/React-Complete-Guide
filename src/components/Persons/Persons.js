import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
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

  // Since this is a PureComponent,
  //It already has this type of shouldComponentUpdate built in
  // this method should return true or false
  // Basically compare all the properties in props AND state
  // and compare them to their old versions
  // and only continue updating if it detects differences
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Update Persons.js] inside shouldComponentUpdate", "nextProps:", nextProps, "nextState:", nextState);
  //   // Do not hard code true or false here.
  //   // Instead check that based on upcoming props or next state
  //   // This only returns true because we used an immutable approach of updating the persons array
  //   // This only checks the pointers/ root objects
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed || this.props.changed ||
  //     nextProps.clicked || this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log("[Update Persons.js] inside componentWillUpdate", "nextProps:", nextProps, "nextState:", nextState);
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