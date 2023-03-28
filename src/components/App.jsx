import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';

export default class App extends React.Component {
  state = {
    contacts: ['Freddie Mercury', 'Homer Simpson', 'Nikola Tesla'],
    name: '',
  };

  getNewContact = data => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
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
