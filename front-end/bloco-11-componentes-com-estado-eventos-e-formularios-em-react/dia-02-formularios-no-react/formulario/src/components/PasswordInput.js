import React from 'react'

export class PasswordInput extends React.Component {
  render() {
    const { password, onInputChange } = this.props;
    return (
      <label htmlFor="password">
        Password
        <input 
          type="password" 
          id="password" 
          name="password"
          onChange={ onInputChange } 
          value={ password } 
        />
      </label>
    )
  }
}

export default PasswordInput
