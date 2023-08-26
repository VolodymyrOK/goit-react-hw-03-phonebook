import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Label,
  StyledForm,
  StyledField,
  Button,
  ErrorMsg,
} from './Contacts.styled';
// import { nanoid } from 'nanoid';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(/^\d+$/, 'Must only contain digits')
    .required('Required'),
});

export const Contacts = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        contacts: [],
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        onAdd(values);
      }}
    >
      <StyledForm>
        <Label htmlFor="username">Name</Label>
        <StyledField
          id="username"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="User name"
          required
        />
        <ErrorMsg name="name" component="span"></ErrorMsg>
        <Label htmlFor="usernumber">Number</Label>
        <StyledField
          id="usernumber"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="User phone"
          required
        />
        <ErrorMsg name="number" component="span"></ErrorMsg>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
