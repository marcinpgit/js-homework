import React from 'react';

class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        const addTask = this.props.addTask;
        const val = this.state.value;

        return (
            <React.Fragment>
                    <input
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button
                        type='button'
                        onClick={() => addTask(val)}
                    >
                       Add task
                    </button>
            </React.Fragment>
        )
    }

}

export default AddToDo;