import React from 'react';
import {connect} from 'react-redux';

class ContactsList extends React.Component {

    render() {
        const { contacts } = this.props;

        console.log(this.props.list);

        return (
            <React.Fragment>
                <h3>Contact List of nice people:</h3>
                <ul>
                    {contacts.map((item, id) => <li key={id}>
                            <strong>{item.name}</strong><br/>
                            {item.phone + ', ' + item.email}<br/>
                            {item.category}
                            <button onClick={() => this.props.removeContact(item.id)}>Remove Contact</button>
                        </li>
                    )}
                </ul>
            </React.Fragment>

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
