import React from 'react';
import { Header, Grid, Icon } from 'semantic-ui-react';

import ContactsList from './ContactsList';
import AddContact from './AddContact';

class ContactsView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid.Column>
                        <Header as='h1' icon textAlign='center'>
                            <Icon name='users' circular/>
                            Contact List of Nice People
                        </Header>
                            <AddContact/>
                            <ContactsList/>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default ContactsView;