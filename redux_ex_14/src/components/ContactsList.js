import React from 'react';
import { connect } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';

class ContactsList extends React.Component {

    render() {
        const { contacts } = this.props;

        console.log(this.props.list);

        return (
                <ul>
                    <Header as='h2' textAlign='center'>
                        Your Contact List:
                    </Header>
                    {contacts.map((item, id) => <li key={id}>
                            <strong>{item.name}</strong><br/>
                            {item.phone + ', ' + item.email}<br/>
                            {item.category}<br/>
                            <Button secondary onClick={() => this.props.removeContact(item.id)}>Remove Contact</Button>
                        </li>
                    )}
                </ul>
        );
    }
}

export default connect(
    state => ({
        contacts: state.contacts.data
    }),
    dispatch => ({
        removeContact: listId =>
            dispatch({
                type: 'REMOVE_CONTACT',
                listId
            })
    })
)(ContactsList);
