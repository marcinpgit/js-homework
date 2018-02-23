import React from 'react';

class AddContact extends React.Component {

    state = {
        contact: {
            contactName: '',
            contactPhone: '',
            contactEmail: '',
            contactCategory: ''
        }
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addContact(this.state);
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
                    name
                    {this.renderInput('contactName')}
                    phone
                    {this.renderInput('contactPhone')}
                    e-mail
                    {this.renderInput('contactEmail')}
                    category
                    {this.renderInput('contactCategory')}
                    <button>
                        Add Contact
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddContact;