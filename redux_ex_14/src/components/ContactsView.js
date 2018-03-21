import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

import ContactsList from './ContactsList';
import AddContact from './AddContact';

class ContactsView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid.Column>
                        <Header as='h1' textAlign='center'>
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