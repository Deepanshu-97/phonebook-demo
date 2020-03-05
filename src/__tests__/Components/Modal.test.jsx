import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Modal from '../../Components/Modal';

const modalProps = {
  open: true,
  handleClose: () => console.log('Modal close handler'),
}
test('Renders the root component', () => {
  const renderResult = render(<Modal {...modalProps}>
    <div>
      Child element
    </div>
  </Modal>);

  expect(renderResult).not.toBe(undefined);
});
