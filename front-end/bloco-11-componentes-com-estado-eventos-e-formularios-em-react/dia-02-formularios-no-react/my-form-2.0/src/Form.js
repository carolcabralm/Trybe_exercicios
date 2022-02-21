import React from 'react';
import Job from './Job';
import PersonalForm from './PersonalForm';

class Form extends React.Component {
  render() {
    const { toUpper, sendForm } = this.props;
    return(
      <form>
        <PersonalForm toUpper={ toUpper } />
        <Job />
        <button type="submit" onClick={ sendForm }>Enviar</button>
      </form>
    )
  }
}

export default Form;
