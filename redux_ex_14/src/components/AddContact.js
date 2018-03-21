import React from 'react';
import {connect} from 'react-redux';

const initialState = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategory: ''
};

class AddContact extends React.Component {

    state = initialState;

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addContact(this.state);
        this.setState(initialState);
    };

    renderInput(fieldContact) {
        return (
            <input
                name={fieldContact}
                value={this.state[fieldContact]}
                onChange={this.handleChange}/>
        )
    }

    render() {
        return (
            <React.Fragment>
                <h4>Please add new contact to the list:</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    {this.renderInput('contactName')}
                    <label>Phone</label>
                    {this.renderInput('contactPhone')}
                    <label>E-mail</label>
                    {this.renderInput('contactEmail')}
                    <label>Category</label>
                    {this.renderInput('contactCategory')}
                    <button>
                        Add Contact
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        contacts: state.data
    }),
    dispatch => ({
        addContact: ({
            contactName,
            contactPhone,
            contactEmail,
            contactCategory
        }) =>
            dispatch({
                type: 'ADD_CONTACT',
                contactName,
                contactPhone,
                contactEmail,
                contactCategory
            })
    })
)(AddContact)