import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContacts = newContacts => {
    console.log(newContacts);
    this.setState(prevState => ({
      state: [...prevState.state, { id: nanoid(), ...newContacts }],
    }));
  };

  render() {
    return (
      <Layout>
        <Contacts onAdd={this.addContacts}></Contacts>
        <GlobalStyle />
      </Layout>
    );
  }
}
