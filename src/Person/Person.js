import React from 'react';

const person = (props) => {
  return(
    <div>
      <h1>Hi I'm {props.name} and I'm {props.age} years old</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default person;