import React from 'react';
import styles from './App.scss';

class Checkbox extends React.Component {
  render () {
    return (
      <div>
        <input className={ styles.sparkApp__checkbox } type="checkbox" id="checkbox" name="subscribe" value="newsletter" />
        <label htmlFor="checkbox">Checkbox label</label>
      </div>
    )
  }
}

export default Checkbox;
