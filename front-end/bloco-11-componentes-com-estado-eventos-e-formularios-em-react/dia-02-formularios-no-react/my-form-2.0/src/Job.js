import React from 'react';

class Job extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Dados do seu último emprego</legend>
        <div>
          Resumo do currículo
          <textarea name="resume" maxLength="1000" required />
        </div>
        <div>
          Cargo
          <textarea name="func" maxLength="40" required />
        </div>
        <div>
          Descrição do cargo
          <input name="description" type="text" maxLength="500" required />
        </div>
      </fieldset>
    )
  }
}

export default Job;
