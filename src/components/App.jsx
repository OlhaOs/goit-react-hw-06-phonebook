import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';

export default class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  getNewContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    return (
      <Container>
        <Form onSubmitButton={this.getNewContact}></Form>
        <ContactList data={this.state.contacts}></ContactList>
      </Container>
    );
  }
}
