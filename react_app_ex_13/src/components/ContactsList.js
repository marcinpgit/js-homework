import React from 'react';

class ContactsList extends React.Component {

    // getCategory = () => {
    //     const category = this.props.list;
    //
    //     return category.map(contact => contact.category.split(','))
    //         .reduce((current, next) => [...current, ...next])
    //         .map(cat => ` [${cat.replace(" ", "")}]`)
    //         .filter((value, index, catArray) => catArray.indexOf(value) === index);
    // };

    render() {
        const {list, removeContact} = this.props;

        console.log(this.props.list);

        return (
            <React.Fragment>
                <h3>Contact List of nice people:</h3>
                <ul>
                    {list.map((item, id) => <li key={id}>
                            <strong>{item.name}</strong><br/>
                            {item.phone + ', ' + item.email}<br/>
                            {/*{this.getCategory()}<br/>*/}
                            <button onClick={() => removeContact(item.id)}>Remove Contact</button>
                        </li>
                    )}
                </ul>
            </React.Fragment>

        );
    }

}

export default ContactsList;