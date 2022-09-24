import React from 'react';
import "./App.css";
import AddContacts from "./component/AddContacts";
import ContactList from "./component/ContactList";
import Header from "./component/Header";
import ContactCard from './component/ContactCard';

function App() {
  const contacts = [
    {
      id: '1',
      name: 'jayjay',
      email: 'jayjay@gmail.com',
    },
    {
      id: '2',
      name: 'mashad',
      email: 'mashadmedia@gmail.com',
    },
  ];
  return (
    <div className='ui container'>
      <Header />
      <AddContacts />
      <ContactList contacts={contacts} />
      
      {/* <ContactCard contacts={contacts} /> */}
    </div>
  );
};

export default App;
