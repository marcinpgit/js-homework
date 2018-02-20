import React from 'react';

import ContactsList from './ContactsList';

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

    render() {
        return (
            <React.Fragment>
                <h3>Contact List of nice people:</h3>
                <ContactsList list={this.state.contacts}/>
            </React.Fragment>
        );
    }
}

export default App;
