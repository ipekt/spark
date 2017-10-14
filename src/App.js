import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Prompts from './Prompts';
import Progress from './Progress';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Prompts/>
        <Progress/>
      </div>
    );
  }
}

export default App;
