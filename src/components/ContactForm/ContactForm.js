import { React } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MainForm, Input, Label, Button, Error } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(7).max(13).required(),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <MainForm>
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error name="name" component="div" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Error name="number" component="div" />
        </Label>
        <Button type="submit">Add contact</Button>
      </MainForm>
    </Formik>
  );
};
