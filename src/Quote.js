import React from 'react';
import styles from './App.scss';

class Color extends React.Component {
  render () {
    return (
      <div>
        <p className={ styles.sparkApp__quote }>“There is no innovation and creativity without failure. Period.” - Brené Brown</p>
      </div>
    )
  }
}

export default Color;
