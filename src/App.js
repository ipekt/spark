import React, { Component } from 'react';
import styles from './App.scss';
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
      <div className={ styles.sparkApp }>

        <div className={ styles.sparkApp__sections }>
          <Header/>
        </div>

        <hr/>

        <div  className={ styles.sparkApp__body }>
          <div className={ styles.sparkApp__sections }>
            <Prompts/>
          </div>

          <div className={ styles.sparkApp__sections }>
            <Progress/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
