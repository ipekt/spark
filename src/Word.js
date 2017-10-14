import React from 'react';
import styles from './App.scss';

class Word extends React.Component {
  render () {
    return (
      <div>
        <div className={ styles.sparkApp__word }>{this.props.word.toUpperCase()}</div>
      </div>
    )
  }
}

export default Word;
