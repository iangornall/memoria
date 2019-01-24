import React from 'react';
import ReactDOM from 'react-dom';
import FormDisplay from './FormDisplay';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
