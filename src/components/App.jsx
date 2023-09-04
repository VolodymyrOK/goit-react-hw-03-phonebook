import { Component } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { nanoid } from 'nanoid';
import data from '../data/data.json';
import { Layout } from 'styles/Layout';
import { ContactsEntry } from './ContactsEntry/ContactsEntry';
import { ContactsList } from './ContactsList/ContactsList';

const STORAGE_KEY = 'storage-contacts';

export class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  //==================  New elements ======================================
  componentDidMount() {
    const storageContacts = localStorage.getItem(STORAGE_KEY);
    if (localStorage.getItem(STORAGE_KEY) !== null)
      this.setState({ contacts: JSON.parse(storageContacts) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
  }
  //=================== /New elements =======================================

  addContact = newContacts => {
    const isDuplicated = this.state.contacts.find(
      item => item.name.toLowerCase() === newContacts.name.toLowerCase()
    );
    if (isDuplicated)
      return alert(newContacts.name + ' is already in contacts');

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(4), ...newContacts }],
    }));
  };

  delContact = idContact => {
    const isDelete = window.confirm('Are you sure?');
    if (isDelete)
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(item => item.id !== idContact),
      }));
  };

  onFilterElement = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  getVisibleContacts = () =>
    this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    const contacts = this.getVisibleContacts();

    return (
      <Layout>
        <ContactsEntry onAdd={this.addContact} />

        <ContactsList
          onFilterElement={this.onFilterElement}
          filter={this.state.filter}
          contacts={contacts}
          onDelContact={this.delContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
