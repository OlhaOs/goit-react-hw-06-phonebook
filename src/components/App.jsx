import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import Filter from './Filter/Filter';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  checkContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.addNewContact(newContact);
  };

  addNewContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filtredData = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h2>Phonebook</h2>
        <Form onSubmitButton={this.checkContact}></Form>
        <h3>Contacts</h3>
        <Filter
          value={this.state.filter}
          onSearch={this.handleFilterChange}
        ></Filter>
        <ContactList
          data={filtredData}
          onDelete={this.deleteContact}
        ></ContactList>
      </Container>
    );
  }
}
