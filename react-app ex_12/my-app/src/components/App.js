import React from 'react';
// import {ToDo} from './ToDo';
// import {AddToDo} from './AddToDo';

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
    }

    render() {
        return (
            <h2>ex12</h2>
        );
    }
}
