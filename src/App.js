import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCardApp from './components/FlashCardApp';
import { Button, Card, Row, Col } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to FlashCard Creator</h2>
        </div>
        <div className="container">
        <FlashCardApp />
        </div>
      </div>
    );
  }
}

export default App;
