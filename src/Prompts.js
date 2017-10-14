import React from 'react';
import styles from './App.scss';
import * as classNames from 'classnames';
import Word from './Word';
import Color from './Color';
import Image from './Image';
import Label from './Label';

class Prompts extends React.Component {
  render () {
    return (
      <div className={ classNames(styles.sparkApp__prompts, styles.sparkApp__sections__borderRight ) }>

        <div className={ styles.sparkApp__promptsContainer }>
          <Label text="Word"/>
          <Word word={this.props.word} />
        </div>

        <div className={ styles.sparkApp__promptsContainer }>
          <Label text="Colour"/>
          <Color/>
        </div>

        <div className={ styles.sparkApp__promptsContainer }>
          <Label text="Image"/>
          <Image/>
        </div>
      </div>
    )
  }
}

export default Prompts;
