import React from "react";
import './css/Person.css';


const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and this is my age: {props.age}.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;

