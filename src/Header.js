import React from 'react';
import styles from './App.scss';
import Logo from './Logo';
import Date from './Date';
import Quote from './Quote';

class Header extends React.Component {
  render () {
    return (
      <div className={ styles.sparkApp__header }>
        <Logo/>
        <Date/>
        <Quote/>
      </div>
    )
  }
}

export default Header;
