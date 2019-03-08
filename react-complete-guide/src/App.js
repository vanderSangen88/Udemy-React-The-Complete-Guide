import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Nick" age="30"/>
        <Person name="Anouk" age="27"/>
        <Person name="Lucas" age="1"/>
      </div>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
