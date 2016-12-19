import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './heyfile';

let hello = () => {
  console.log("I am the hello function");
}

ReactDOM.render(<Hello />, document.getElementById('app'));
