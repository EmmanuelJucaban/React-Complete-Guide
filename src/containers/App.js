import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js Inside Constructor', props);
    this.state = {
      persons: [
        {id: 0, name: 'Oscar', age: 27},
        {id: 1, name: 'Frank', age: 28},
        {id: 2, name: 'Shane', age: 26}
      ],
      otherState: 'Some other value',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  // This is not needed anymore because it's now a PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Update App.js] inside shouldComponentUpdate", "nextProps:", nextProps, "nextState:", nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log("[Update App.js] inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[Update App.js] inside componentDidUpdate");
  }

  render() {
    console.log("Inside render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
        </div>
      );
    }

    return (
        <div className={classes.App}>
          <button onClick={() => { this.setState({showPersons: true})} }>Show Persons</button>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
