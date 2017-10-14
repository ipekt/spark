import React from 'react';
import styles from './App.scss';

class Label extends React.Component {
  render () {
    return (
      <p className={ styles.sparkApp__label }>{ this.props.text }</p>
    )
  }
}

export default Label;
