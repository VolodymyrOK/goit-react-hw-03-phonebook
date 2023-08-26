import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const StyledField = styled(Field)`
  padding: 4px;
`;

export const Button = styled.button`
  margin: 16px auto 0;
  padding: 4px;
  width: 10em;
  border: 1px solid blue;
  border-radius: 4px;
  background-color: #dddddd;
  cursor: pointer;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
