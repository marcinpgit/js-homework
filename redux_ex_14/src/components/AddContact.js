import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Header } from 'semantic-ui-react';

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
                <Header as='h4' textAlign='center'>
                    Please add new contact to the list
                </Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Full Name</label>
                        {this.renderInput('contactName')}
                    </Form.Field>
                    <Form.Field>
                        <label>Phone number</label>
                        {this.renderInput('contactPhone')}
                    </Form.Field>
                    <Form.Field>
                        <label>E-mail addres</label>
                        {this.renderInput('contactEmail')}
                    </Form.Field>
                    <Form.Field>
                        <label>Category (work, family, friends etc.)</label>
                        {this.renderInput('contactCategory')}
                    </Form.Field>
                    <Button>
                        Add Contact
                    </Button>
                </Form>
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