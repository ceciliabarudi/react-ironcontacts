'Use strict';

import React, { Component } from 'react';
import './App.css';

import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <Contacts></Contacts>
      </div>
    );
  }
}

export default App;
