import React from 'react';
import TodoItems from './TodoItems';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'Get a shoping cart',
          completed: false,
          id: 123456789
        },
        {
          title: 'Buy Milk',
          completed: false,
          id: 234567890
        }
      ],
      newTask: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({
      newTask: e.target.value
    })
  }

  handleClick(e) {
    if(this.state.newTask.trim()) {
      let newItem = {
        title: this.state.newTask,
        completed: false,
        id: Date.now()
      }
      this.setState(prevState => {
        return {
          tasks: prevState.tasks.concat(newItem)
        }
      })
      this.setState({
        newTask: ''
      })
    } else {
      alert('Please enter a value')
    }
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <form>
          <input type="text" onInput={this.handleInput} value={this.state.newTask}/>
          <button type="button" onClick={this.handleClick}>Add</button>
        </form>
        <ul>
          <TodoItems tasks={this.state.tasks}/>
        </ul>
        
      </div>
      
    )
  }
}

export default TodoList;