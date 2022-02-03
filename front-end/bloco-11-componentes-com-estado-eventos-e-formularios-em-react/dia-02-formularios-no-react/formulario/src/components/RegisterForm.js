import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import NameInput from "./NameInput";

class RegisterForm extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      name:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    const { name, email, password }  = this.state
    event.preventDefault();
    alert(`Foi feito cadastro com nome ${name} email ${email} e senha ${password}`)
  }

  render() {
    const { name, email, password }  = this.state
    return (
      <section>
          <h2>Register</h2>
          <form onSubmit={ this.handleSubmit }>
            <NameInput name={name} onInputChange={ this.handleChange } />
            <EmailInput email={email} onInputChange={ this.handleChange } />
            <PasswordInput password={password} onInputChange={ this.handleChange } />
            <button type='submit'>Cadastre-se</button>
          </form>
      </section>
    )
  }
}

export default RegisterForm