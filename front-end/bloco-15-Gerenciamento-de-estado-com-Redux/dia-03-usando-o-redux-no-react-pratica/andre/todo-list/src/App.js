import { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './redux/actions';
import FormToDo from './components/FormToDo';

class App extends Component {
/*   constructor() {
    super();

    this.state = {
      taskList: [],
      id:0,
    }
  } */

  saveTask = (e, task) => {
    e.preventDefault();

    // const { id } = this.state;
    const { dispatch, taskList, id } = this.props;

    const taskObj = {
      id: `${id}-${task}`,
      task,
      done: false,
    }

    dispatch(actionCreators.updateTaskList([ ...taskList, taskObj ]))
    dispatch(actionCreators.updateId());

    /* this.setState(
      prevState => ({
        taskList: [...prevState.taskList, taskObj],
      }),
      () => {
        this.setState(prevState => ({
          id: prevState.id + 1,
        }))
      }
    ) */
  }

  removeTask = (taskId) => {
    const { taskList, dispatch } = this.props;

    dispatch(actionCreators.updateTaskList(taskList.filter(({ id }) => id !== taskId)))
    /* const { taskList } = this.state;
    this.setState({
      taskList: taskList.filter(({ id }) => id !== taskId),
    }) */
  }

  editTask = (taskId) => {
    // const { taskList } = this.state;
    const { taskList, dispatch } = this.props;

    const newTask = taskList.map(({ id, done, task }) => {
      if (id === taskId) {
        return { id, done: !done, task };
      }
      return { id, done, task }
    })
    dispatch(actionCreators.updateTaskList(newTask))
    // this.setState({ taskList: newTask })
  }

  render(){
    // const { taskList } = this.state;
    const { taskList } = this.props;
    return (
      <div>
        <h1>TO DO LIST</h1>
        <FormToDo saveTask={this.saveTask}/>

        <section>
          {taskList.map(({ task, id, done }) => (
            <div className="container-task" key={ id }>
              <p
                className={done ? "done" : ""}
                onClick={() => this.editTask(id)}
              >
                { task }
              </p>
              <button
                type="button"
                onClick={() => this.removeTask(id)}
              >
                X
              </button>
            </div>
          ))}
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ toDo: { taskList, id }}) => ({
  taskList,
  id,
})

export default connect(mapStateToProps)(App);
// export default App;
