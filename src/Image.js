import React from 'react';
import styles from './App.scss';

class Image extends React.Component {
  render () {
    return (
      <div>
        <img className={ styles.sparkApp__image } src="https://picsum.photos/300/300" alt="Image"/>
      </div>
    )
  }
}

export default Image;
