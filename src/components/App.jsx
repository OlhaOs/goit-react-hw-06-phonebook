import React, { useState } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => setFilter(e.currentTarget.value);

  const checkContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    addNewContact(newContact);
  };

  const addNewContact = newContact => {
    setContacts(prevState => [newContact, ...prevState]);
  };
  const deleteContact = idContact => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== idContact)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <h2>Phonebook</h2>
      <Form onSubmitButton={checkContact} />
      <h3>Contacts</h3>
      <Filter value={filter} onSearch={handleFilterChange} />
      <ContactList data={filtredData} onDelete={deleteContact} />
    </Container>
  );
};
export default App;
