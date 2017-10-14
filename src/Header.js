import React from 'react';
import Logo from './Logo';
import Date from './Date';
import Quote from './Quote';

class Header extends React.Component {
  render () {
    return (
      <div>
        <Logo/>
        <Date/>
        <Quote/>
      </div>
    )
  }
}

export default Header;
