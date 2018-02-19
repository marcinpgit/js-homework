import React from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [
                {name: 'Todo 1', isFinished: false},
                {name: 'Todo 2', isFinished: true},
                {name: 'Todo 3', isFinished: false},
                {name: 'Todo 4', isFinished: false},
                {name: 'Todo 5', isFinished: true}
            ]
        };
        this.addTask = this.addTask.bind(this);
    }

    addTask = (newTodoName) => {
        let newTodo = {name: newTodoName, isFinished: false};
        let todos = [...this.state.toDoList, newTodo];
        this.setState({toDoList: todos});
    }

    render() {
        return (
            <React.Fragment>
                <ToDo todos={this.state.toDoList}/>
                <AddToDo
                    addTask={this.addTask}/>
            </React.Fragment>
        );
    }
}
