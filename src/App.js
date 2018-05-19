import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input'

class App extends Component {
  render() {
    let l = () => console.log('Hello')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Input />
      </div>
    );
  }
}

export default App;
