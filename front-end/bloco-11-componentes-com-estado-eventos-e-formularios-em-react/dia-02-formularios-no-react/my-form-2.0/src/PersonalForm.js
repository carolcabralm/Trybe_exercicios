import React from 'react';

const uf = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

class PersonalForm extends React.Component {
  render() {
    const { toUpper } = this.props;
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          Nome:
          <input name="name" type="text" maxLength="40" onChange={toUpper} required />
        </div>  
        <div className="container">
          Email:
          <input name="email" type="email" maxLength="50" required />
        </div>
        <div className="container">
          CPF:
          <input name="cpf" type="text" max="11" required />
        </div>
        <div className="container">
          Endereço:
          <input name="address" type="text" maxLength="200" /* onChange={removeCharacter} */ required />
        </div>
        <div className="container">
          Cidade:
          <input name="city" type="text" maxLength="28" /* onChange={verifyCity} */ required />
        </div>
        <div className="container">
          Estado:
          <select name="state" /* onChange={changeState} */ required>
            <option value="">Selecione</option>
            {
              uf.map((element) => <option key={element}>{ element }</option>)
            }
          </select>
        </div>
        <div className="container">
          <label htmlFor="house">
            <input name ="home" id="house" type="radio" required />Casa
          </label>
          <label htmlFor="ap">
            <input name="home" id="ap" type="radio" required />Apartamento
          </label>
        </div>

      </fieldset>
    )
  }
}

export default PersonalForm;
