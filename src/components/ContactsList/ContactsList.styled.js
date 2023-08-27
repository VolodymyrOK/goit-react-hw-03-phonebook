import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 28px;
  color: DarkSlateBlue;
`;
export const HeadContacts = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 14px;
`;
export const ContactList = styled.ul``;
export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    display: inline-block;
    &:nth-child(1) {
      margin-bottom: 8px;
      font-size: 18px;
      color: black;
      font-style: italic;
    }
    &:nth-child(2) {
      margin-left: 18px;
      font-weight: 500;
      color: green;
    }
  }
`;

export const DelButton = styled.button`
  font-size: 14px;
  margin-left: 14px;
  border: 1px solid teal;
  border-radius: 4px;
  cursor: pointer;
  transition: color 150ms ease-in, background-color 150ms ease-in,
    scale 150ms ease-in;
  &:is(:hover, :focus) {
    color: white;
    background-color: tomato;
  }
  &:active {
    scale: 0.95;
  }
`;
