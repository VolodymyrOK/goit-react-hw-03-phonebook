import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 28px;
  color: ${({ theme: { colors } }) => colors.colorH2};
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
      color: ${({ theme: { colors } }) => colors.colorName};
      font-style: italic;
    }
    &:nth-child(2) {
      margin-left: 18px;
      font-weight: 500;
      color: ${({ theme: { colors } }) => colors.colorPhone};
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
    background-color: ${({ theme: { colors } }) => colors.bgcDelBtnHover};
  }
  &:active {
    scale: 0.95;
  }
`;

export const MessageAboutEmpty = styled.div`
  font-weight: 500;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.colorErr};
`;
