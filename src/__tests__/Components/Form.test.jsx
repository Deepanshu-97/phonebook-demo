import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import ContactForm from '../../Components/Form';

const contactFormProps = {
  submitActionText: 'submit',
  handleAddContact: () => console.log('contact add handler'),
}
test('Renders the root component', () => {
  const renderResult = render(<ContactForm {...contactFormProps} />);

  expect(renderResult).not.toBe(undefined);
});
