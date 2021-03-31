// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  render() {
    return (
      <input type="password" name="password" size="50" onKeyUp={() => console.log('Entering password...')} />
    );
  }
}