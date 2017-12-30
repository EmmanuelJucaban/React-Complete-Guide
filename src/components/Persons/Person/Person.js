import React, { Component }from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxi';
import withClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log("[Person.js] inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount");
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  render() {
    console.log("[Person.js] inside render");

    return (
      <Aux>
        <p onClick={this.props.click}>Hi I'm {this.props.name} and I'm {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          ref={ (inp) => { this.inputElement = inp } }
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.bool
};

export default withClass(Person, classes.Person);