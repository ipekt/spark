import React from 'react';
import styles from './App.scss';

class Color extends React.Component {
  render () {
    return (
      <div>
        <div className={ styles.sparkApp__color }></div>
      </div>
    )
  }
}

export default Color;
