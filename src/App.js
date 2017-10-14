import React, { Component } from 'react';
import styles from './App.scss';
import Header from './Header';
import Prompts from './Prompts';
import Progress from './Progress';
import { fetchEntries } from './effects';
import Calender from "./Calender";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetchEntries(1, this.onFetchEntriesSuccess);
  }

  onFetchEntriesSuccess = (entries) => {
    console.log(entries)
   this.setState({ entries: entries });
  };

  render() {
    return (
      <div className={ styles.sparkApp }>

        <div className={ styles.sparkApp__sections }>
          <Header/>
        </div>


        <div  className={ styles.sparkApp__body }>
          <div className={ styles.sparkApp__sections }>
            <Prompts/>
          </div>

          <div className={ styles.sparkApp__sections }>
            <Progress entries={this.state.entries}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
