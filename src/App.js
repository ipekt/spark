import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Prompts from './Prompts';
import Progress from './Progress';
import { fetchEntries } from './effects';

class App extends Component {

  componentDidMount() {
    fetchEntries(1);
  }

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
