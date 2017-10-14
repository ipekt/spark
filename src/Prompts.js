import React from 'react';
import styles from './App.scss';
import Word from './Word';
import Color from './Color';
import Image from './Image';
import Label from './Label';

class Prompts extends React.Component {
  render () {
    return (
      <div className={ styles.sparkApp__prompts }>
        <Label text="Word"/>
        <Word/>

        <Label text="Colour"/>
        <Color/>

        <Label text="Image"/>
        <Image/>
      </div>
    )
  }
}

export default Prompts;
