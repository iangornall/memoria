import React from 'react';
import ReactDOM from 'react-dom';
import ClickOff from './ClickOff';
import { Provider } from 'react-redux';
import store from '../store';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><ClickOff /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
