import React from 'react';
import ReactDOM from 'react-dom';
import ModalContent from './ModalContent';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
