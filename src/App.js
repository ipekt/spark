import React, { Component } from 'react';
import styles from './App.scss';
import Header from './Header';
import Prompts from './Prompts';
import Progress from './Progress';
import { fetchEntries } from './effects';
import * as moment from 'moment';
import {updateCompleted} from './effects';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: null,
      today:  new moment().format("YYYY-MM-DD")
    }
  }

  componentDidMount() {
    fetchEntries(1, this.onFetchEntriesSuccess);
  }

  onFetchEntriesSuccess = (entries) => {
   this.setState({ entries: entries });
  };

  updateCompleted = (checked) => {
    this.state.entries[this.state.today].completed = checked;
    this.forceUpdate();
    updateCompleted(1, checked);
  }

  render() {
    // const today = new moment().format("YYYY-MM-DD");
    const isChecked = this.state.entries && this.state.entries[this.state.today].completed;

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
            <Progress entries={this.state.entries || {}} onChange={this.updateCompleted} isChecked={isChecked} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
