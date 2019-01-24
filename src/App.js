import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ScheduleScreen from './screens/ScheduleScreen';

let App = () => (
  <Provider store={store}>
    <ScheduleScreen />
  </Provider>
);
export default App;
