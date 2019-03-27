import React from 'react';
import Header from './Header';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskListFilter from './TaskListFilter';

class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ task: 'Absolutly anything', status: 'completed' },
      { task: 'be aware', status: 'active' },
      { task: 'call your mom', status: 'completed' },
      { task: 'do things somewhere', status: 'active' },
      { task: 'eat food', status: 'active' }
      ],
      filteredList: [],
    };
  };


  filterTasks = (event) => {
    console.log(event.target.id);
    if (event.target.id === 'all') {
      this.setState({ filteredList: this.state.list });
    } else {
      let testArr = this.state.list.filter(list => list.status === `${event.target.id}`);
      this.setState({ filteredList: testArr });
    }
  }


  render() {
    return (
      <div>
        <Header />
        <TaskInput />
        <TaskList taskList={this.state.filteredList.length === 0 ? this.state.list : this.state.filteredList} />
        <TaskListFilter taskList={this.state.list} onClickEvent={this.filterTasks} />
      </div>
    )
  }

}

export default TaskApp;