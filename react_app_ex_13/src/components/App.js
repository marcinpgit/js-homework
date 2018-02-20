import React from 'react';

import ContactsList from './ContactsList';
import AddContact from './AddContact';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                {name: 'Aleksandra Kowalska', phone: '234 345 456', email: 'ak@mail.com', category: ''},
                {name: 'Monika Nowak', phone: '456 234 567', email: 'mw@mail.com', category: ''},
                {name: 'Wiktoria Owocowa', phone: '987 654 324', email: 'wo@mail.com', category: ''}
            ]
        };

    }

    addContacts = (addPerson) => {
        const newPerson = {name: addPerson};
        const newContact = [...this.state.contacts, newPerson];

        this.setState({
            contacts: newContact
        })
    };

    render() {
        return (
            <React.Fragment>
                <ContactsList list={this.state.contacts}/>
                <AddContact addContacts={this.addContacts}/>
            </React.Fragment>
        );
    }
}

export default App;
