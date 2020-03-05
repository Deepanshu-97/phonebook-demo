import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import InputField from '../../Components/InputField';

test('Renders the root component', () => {
  const renderResult = render(<InputField />);
  
  expect(renderResult).not.toBe(undefined);
});
