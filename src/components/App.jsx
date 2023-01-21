import { nanoid } from 'nanoid';
import { React, Component } from 'react';
import { Container } from './App.styled';
import { Title } from './Title';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
export class App extends Component {
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
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts !== null) {
      return this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const phoneNames = this.state.contacts.map(contact => contact.name);
    if (phoneNames.includes(name)) {
      return alert(`${name} is already in contacts.`);
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { filter } = this.state;
    const normalazedFilter = filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };

  deleteContact = selectedId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== selectedId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <Title text="Phonebook" />
        <ContactForm onSubmit={this.addContact} />
        <Title text="Contacts" />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
