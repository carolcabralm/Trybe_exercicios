import React from 'react'

export class NameInput extends React.Component {
  render() {
    const { name, onInputChange } = this.props;
    return (
      <label htmlFor="name">
        Name
        <input 
          type="text" 
          id="name" 
          name="name"
          onChange={ onInputChange } 
          value={ name } 
        />
      </label>
    )
  }
}

export default NameInput