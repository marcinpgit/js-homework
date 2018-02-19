import React from 'react';


class ToDo extends React.Component {
    render() {
        const {todos} = this.props;
        const decorateIsFinished = (isDone, content) =>
            isDone ? <del>{content}</del> : content;

        return (
            <React.Fragment>
                <h3>todo comp</h3>
                <ul>
                    {todos.map(todo => <li key={todo.id}>
                        {decorateIsFinished(todo.isFinished, todo.name)}
                    </li>)}
                </ul>
            </React.Fragment>
        )
    }

}

export default ToDo;