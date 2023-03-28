import css from './Form.module.css';
import { nanoid } from 'nanoid';
import React from 'react';

export default class Form extends React.Component {
  state = {
    name: '',
    id: '',
  };
  nameInputId = nanoid();

  handleInputChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      id: event.currentTarget.id,
    });
     };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitButton(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form className={css.phoneBook} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId} className={css.lbl}>
            Name
          </label>
          <input
            id={nanoid()}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>{' '}
      </>
    );
  }
}
