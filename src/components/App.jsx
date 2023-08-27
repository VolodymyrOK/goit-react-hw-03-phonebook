import { Component } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { nanoid } from 'nanoid';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';

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

  addContact = newContacts => {
    this.state.contacts.find(item => item.name === newContacts.name)
      ? alert(newContacts.name + ' is already in contacts')
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(4), ...newContacts }],
        }));
  };

  delContact = idContact => {
    window.confirm('Are you sure?') &&
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(item => item.id !== idContact),
      }));
  };

  onFilterElement = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  render() {
    const contacts = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Layout>
        <ContactsEntry
          title="Phonebook"
          state={this.state}
          onAdd={this.addContact}
        ></ContactsEntry>

        <ContactsList
          title="Contacts"
          onFilterElement={this.onFilterElement}
          filter={this.state.filter}
          contacts={contacts}
          onDelContact={this.delContact}
        ></ContactsList>
        <GlobalStyle />
      </Layout>
    );
  }
}
