import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) =>  {
  const style = {
    '@media (min-width: 500px)':  {
      width: '450px'
  }}
  return (
    <div className = 'Person' style = {style}>
      <p onClick = {props.click}> Mi name is {props.name} and I am {props.age} </ p>
      <p>{props.children}</ p>
      <input type='text' onChange = {props.change} ></input>
    </ div>
  )

}

export default Radium(person);
