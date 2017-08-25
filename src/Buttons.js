import React, { Component } from 'react';
import './App.css';

class Buttons extends Component {
  render() {
    let ButtonList = ["+", "-", "CHQ", "<", ">"]
    let ButtonsArray = ButtonList.map((Button, index) => (
      <div className="button">{Button}</div>
    ));
    return (
      <div className="buttons-bar">
        {ButtonsArray}
      </div>
    );
  }
}

export default Buttons;
