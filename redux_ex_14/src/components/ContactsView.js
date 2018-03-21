import React from 'react';

import ContactsList from './ContactsList';
import AddContact from './AddContact';

class ContactsView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <ContactsList/>
                <AddContact/>
            </React.Fragment>
        );
    }
}

export default ContactsView;