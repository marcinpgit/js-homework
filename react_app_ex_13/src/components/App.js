import React from 'react';

import ContactsList from './ContactsList';
import AddContact from './AddContact';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                {id: '1', name: 'Aleksandra Kowalska', phone: '234 345 456', email: 'ak@mail.com', category: 'family'},
                {id: '2', name: 'Monika Nowak', phone: '456 234 567', email: 'mw@mail.com', category: 'work'},
                {id: '3', name: 'Wiktoria Owocowa', phone: '987 654 324', email: 'wo@mail.com', category: 'work'}
            ]
        };

    }

    addContact = ({contactName, contactPhone, contactEmail, contactCategory}) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32),
                name: contactName,
                phone: contactPhone,
                email: contactEmail,
                category: contactCategory ? contactCategory : 'uncategorised'.toUpperCase()
            })
        })
    };

    removeContact = listId => {
        this.setState({
            contacts: this.state.contacts.filter(list => list.id !== listId)
        })
    };

    getCategory = () => {
        const category = this.state.contacts.category;
        const cat = category.split(',');
        return cat
            .map(contact => `[${contact}]`)
            .join(',');
    };

    render() {
        return (
            <React.Fragment>
                <ContactsList
                    list={this.state.contacts}
                    removeContact={this.removeContact}
                />
                <AddContact
                    addContact={this.addContact}
                    getCategory={this.getCategory}
                />
            </React.Fragment>
        );
    }
}

export default App;
