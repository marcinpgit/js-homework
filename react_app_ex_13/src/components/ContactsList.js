import React from 'react';

class ContactsList extends React.Component {
    render() {
        const {list, removeContact} = this.props;

        return (
            <React.Fragment>
                <h3>Contact List of nice people:</h3>
                <ul>
                    {list.map((item, id) => <li key={id}>
                            <strong>{item.name}</strong><br/>
                            {item.phone + ', ' + item.email}<br/>
                            {item.category}
                            <button onClick={() => removeContact(item.id)}>Remove Contact</button>
                        </li>
                    )}
                </ul>
            </React.Fragment>

        );
    }

}

export default ContactsList;