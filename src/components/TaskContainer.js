import React from 'react';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.editInput = React.createRef();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEditing = this.handleEditing.bind(this);

    const { text } = props;
    this.state = {
      edit: false,
      taskText: text,
    }
  }

  componentDidUpdate() {
    const { edit } = this.state;
    if (edit) {
      this.editInput.current.focus();
    }
  }

  handleToggle() {
    const { taskText } = this.state;
    if (taskText !== '') {
      this.setState((prevState) => ({
        edit: !prevState.edit,
      }));
    }
  }

  handleEditing({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { edit, taskText } = this.state

    const {
      id: inputID,
      text,
      handleEditBack,
    } = this.props;

    return (
      <li>
        { !edit
          ? (
            <div>
              <span>{ text }</span>
              <button
                onClick={ this.handleToggle }
              >
                Editar
              </button>
              <button>Remover</button>
            </div>
          )
          : (
            <div>
              <input
                ref={ this.editInput }
                type="text"
                name="taskText"
                value={ taskText }
                onChange={ this.handleEditing }
              />
              <label>Escreva aqui para editar sua tarefa</label>
              <button
                onClick={ () => { this.handleToggle(); handleEditBack(taskText, inputID) } }
              >
                Voltar
              </button>
            </div>
          )
        }
      </li>
    );
  }
}

export default TaskContainer;
