import React from 'react';

class Label extends React.Component {
  render () {
    return (
      <p>{ this.props.text }</p>
    )
  }
}

export default Label;
