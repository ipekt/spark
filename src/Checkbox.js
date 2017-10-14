import React from 'react';

class Checkbox extends React.Component {
  render () {
    return (
      <div>
        <input type="checkbox" id="checkbox" name="subscribe" value="newsletter" />
        <label htmlFor="checkbox">Checkbox label</label>
      </div>
    )
  }
}

export default Checkbox;
