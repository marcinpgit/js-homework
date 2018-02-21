import React from 'react';

class AddContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: {
                name: 'contactName',
                phone: 'contactEmail',
                email: 'contactEmail',
                category: []
            }
        };
    }

    handleChange = ({ target: { name, value } }) => {
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
                    {this.renderInput('name')}
                    phone
                    {this.renderInput('phone')}
                    e-mail
                    {this.renderInput('email')}
                    category
                    {this.renderInput('category')}
                    <button>
                        Add Contact
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddContact;