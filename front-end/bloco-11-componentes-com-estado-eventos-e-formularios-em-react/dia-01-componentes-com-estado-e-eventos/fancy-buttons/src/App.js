import React from 'react';

class App extends React.Component {
  constructor() {
    super()

      this.function1 = this.function1.bind(this)
      this.function2 = this.function2.bind(this)
      this.function3 = this.function3.bind(this)
      
      this.state = {
        numeroCliques1: 0,
        numeroCliques2: 0,
        numeroCliques3: 0,
      };
  }

  function1() {
    this.setState((estadoANterior, _props) => ({
      numeroCliques1: estadoANterior.numeroCliques1 + 1
    }), () => {
      console.log(`Botão 1 ${this.buttonColor(this.state.function1)}`);
    })
  }
  
  function2() {
    this.setState((estadoANterior, _props) => ({
      numeroCliques2: estadoANterior.numeroCliques2 + 1
    }))
  }
  
  function3() {
    this.setState((estadoANterior, _props) => ({
      numeroCliques3: estadoANterior.numeroCliques3 + 1
    }))
  }

  buttonColor(clicks) {
    return clicks % 2 === 0 ? 'green' : 'red';
  }

  render() {
    const { numeroCliques1, numeroCliques2, numeroCliques3 } = this.state;
    return (
      <>
        <button onClick={this.function1} style={{ backgroundColor: this.buttonColor(numeroCliques1)}}>Botão 1 | Count = { numeroCliques1 }</button>

        <button onClick={this.function2}style={{ backgroundColor: this.buttonColor(numeroCliques2)}}>Botão 2 | Count = { numeroCliques2 }</button>

        <button onClick={this.function3}style={{ backgroundColor: this.buttonColor(numeroCliques3)}}>Botão 3 | Count = { numeroCliques3 }</button>
      </>
    )
  }
}

export default App;
