import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

let App = () => (
  <Provider store={store}>
    This is my app.
  </Provider>
)

export default App;
