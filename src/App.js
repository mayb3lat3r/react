import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';
import { className } from 'postcss-selector-parser';

class App extends Component {
  render() {
    return(
      React.createElement(
        'div',
        {
          style: {color:'red', fontSize:'20px'},
          className: 'example'
        },
        'EXAMPLE-RED?'
      )
    )
  }
}

export default App;
