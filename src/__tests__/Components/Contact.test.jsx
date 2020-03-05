import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../../Components/Contact';

const contactProps = {
  handleEdit: () => console.log('contact edit handler'),
  handleDelete: () => console.log('contact delete handler')
}
test('Renders the <Contact /> component', () => {
  const renderResult = render(<Contact {...contactProps} />);

  expect(renderResult).not.toBe(undefined);
});
