import React from 'react';

class Display extends React.Component {
  render() {
    const { name, email, cpf, address, city, state, home, resume, func, description } = this.props;
    return (
      <main>
        <h1>{ name }</h1>
        <h3>{ email }</h3>
        <p>{ cpf }</p>
        <p>{ address }</p>
        <p>{ city }</p>
        <p>{ state }</p>
        <p>{ home }</p>
        <p>{ resume }</p>
        <p>{ func }</p>
        <p>{ description }</p>
      </main>
    )
  }
}

export default Display;
