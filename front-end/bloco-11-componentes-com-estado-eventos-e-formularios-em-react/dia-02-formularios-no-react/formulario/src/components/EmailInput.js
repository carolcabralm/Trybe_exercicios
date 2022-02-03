import React from 'react'

export class EmailInput extends React.Component {
  render() {
    const { email, onInputChange } = this.props;
    return (
      <label htmlFor="email">
        Email
        <input 
          type="email" 
          id="email" 
          name="email"
          onChange={ onInputChange } 
          value={ email } 
        />
      </label>
    )
  }
}

export default EmailInput
