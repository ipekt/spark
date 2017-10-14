import React from 'react';
import styles from './App.scss';
import {updateCompleted} from './effects';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: props.isChecked
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({checked: nextProps.isChecked})
  }


  onChange = (e) => {
    this.props.onChange(!this.state.checked)
    this.setState({checked: !this.state.checked});
  };
  render () {
    return (
      <div className={ styles.sparkApp__checkboxContainer }>
        <input
            className={ styles.sparkApp__checkbox }
            type="checkbox"
            id="checkbox"
            checked={this.state.checked}
            onChange={this.onChange} />
        <label htmlFor="checkbox">Checkbox label</label>        <label className={ styles.sparkApp__checkboxLabel} htmlFor="checkbox">I was creative today</label>
      </div>
    )
  }
}

export default Checkbox;
