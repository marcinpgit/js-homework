import React from 'react';

class ContactsList extends React.Component {
    render() {
        const {list} = this.props;

        return (
            <ul>
                {list.map((item, id) => <li key={id}>
                        <strong>{item.name}</strong><br/>
                        {item.phone + ', ' + item.email}<br/>
                        {item.category}
                    </li>
                )}
            </ul>

        );
    }

}

export default ContactsList;