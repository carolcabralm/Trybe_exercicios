import React from 'react';
import Display from './Display';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      home: '',
      resume: '',
      func: '',
      description: '',
    }
  }

  toUpper = (event) => {
    console.log(event.target.value)
    this.setState({
      name: (event.target.value).toUpperCase(),
    })
  }

  sendForm = (e) => {
    e.preventDefault()
    const { name } = this.state
    return <Display name={ name } />
  }

  render() {
    return (
      <div>
        <Form sendForm={this.sendForm} toUpper={this.toUpper} />
      </div>
    )
  }
}

export default App;
