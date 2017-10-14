import React from 'react';
import Word from './Word';
import Color from './Color';
import Image from './Image';
import Label from './Label';

class Prompts extends React.Component {
  render () {
    return (
      <div>
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
