import React from 'react';


class ToDo extends React.Component {
    render() {
        const {todos} = this.props;
        const decorateIsFinished = (isDone, content) =>
            isDone ? <del>{content}</del> : content;

        return (
            <React.Fragment>
                <h3>Table with Tasks</h3>
                <table>
                    {todos.map((todo, id) => <tr key={id}>
                        {decorateIsFinished(todo.isFinished, todo.name)}
                    </tr>)}
                </table>
            </React.Fragment>
        )
    }

}

export default ToDo;