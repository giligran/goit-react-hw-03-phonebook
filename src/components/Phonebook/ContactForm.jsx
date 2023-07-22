import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, Button, FormContact } from './Phonebook.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends React.Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  static propType = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  changeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const id = nanoid(5);

    this.props.onSubmit({ id, name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormContact onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>name</label>
        <Input
          id={this.nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={this.changeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberInputId}>number</label>
        <Input
          id={this.numberInputId}
          type="tel"
          name="number"
          value={number}
          onChange={this.changeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button>Add contact</Button>
      </FormContact>
    );
  }
}

export default ContactForm;
