import { Filter } from 'components/Filter/Filter';
import {
  ContactList,
  ContactListItem,
  DelButton,
  HeadContacts,
  Title,
} from './ContactsList.styled';

export const ContactsList = ({
  title,
  contacts,
  onDelContact,
  onFilterElement,
  filter,
}) => {
  return (
    <>
      <HeadContacts>
        <Title>{title}</Title>
        <Filter onFilterElement={onFilterElement} filter={filter} />
      </HeadContacts>
      <ContactList>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <DelButton type="button" onClick={() => onDelContact(id)}>
              Delete
            </DelButton>
          </ContactListItem>
        ))}
      </ContactList>
    </>
  );
};
