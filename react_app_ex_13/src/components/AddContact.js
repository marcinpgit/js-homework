import React from 'react';

class AddContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        const {addContacts} = this.props;
        const val = this.state.value;

        return (
            <React.Fragment>
                <h4>Please add new contact to the list:</h4>
                <input
                    type='text'
                    onChange={this.handleChange}
                />
                <button
                    type='button'
                    onClick={() => addContacts(val)}
                >
                    Add Contact
                </button>
            </React.Fragment>
        );
    }
}

export default AddContact;