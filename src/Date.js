import React from 'react';
import styles from './App.scss';

class Date extends React.Component {
  render () {
    return (
      <div>
        <p className={ styles.sparkApp__date }>Saturday 14 October 2017</p>
      </div>
    )
  }
}

export default Date;
