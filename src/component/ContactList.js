import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);

    const renderContactLIst = props.contacts.map((contacts) => {
        console.log(contacts);
        return (
            <ContactCard contacts={contacts} />
        );
    });
    return (
        <div className='ui celled list'>{renderContactLIst}</div>
    );
}

export default ContactList;