import { Component } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { nanoid } from 'nanoid';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';
import data from '../data/data.json';

export class App extends Component {
  state = {
    contacts: data,
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
