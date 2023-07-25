import React from 'react';
import ContactForm from './ContactForm';
import ContactList from 'components/Phonebook/ContactList';
import Filter from './Filter';
import { Container, ContactsContaier } from './Phonebook.styled';
class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('state'));
    if (savedContacts) {
      this.setState({
        contacts: savedContacts,
      });
    } else {
      console.log('localStorage is empty');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('state', JSON.stringify(this.state.contacts));
      console.log('Обновилось');
    }
  }

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const { name } = data;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} already in contact list`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  changeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  filterList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  render() {
    return (
      <Container>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactsContaier>
          <h2>Contacts</h2>
          <Filter filter={this.changeInput} />
          <ContactList
            users={this.filterList()}
            onDelete={this.deleteContact}
          />
        </ContactsContaier>
      </Container>
    );
  }
}

export default Phonebook;
