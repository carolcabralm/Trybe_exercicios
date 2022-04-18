import { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../redux/actions';


class FormToDo extends Component {
/*   constructor() {
    super();

    this.state = {
      toDo: '',
    }
  } */

  handleChange = ({ target: { /* name,  */value } }) => {
    const { saveTaskDispatch } = this.props;
    saveTaskDispatch(value);
    /* this.setState({
      [name]: value,
    }) */
  }

  render(){
    // const { toDo } = this.state;
    const { toDo } = this.props;
    const { saveTask } = this.props;

    return (
      <form onSubmit={(e) => saveTask(e, toDo)}>
        <input 
          type="text" 
          name="toDo"
          value={ toDo }
          onChange={ this.handleChange }
        />
        <button type="submit">Salvar</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveTaskDispatch: (task) => dispatch(actionCreators.saveTask(task))
})

const mapStateToProps = ({ toDo: { task }}) => ({
  toDo: task,
})

export default connect(mapStateToProps, mapDispatchToProps)(FormToDo);
