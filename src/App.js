import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {set, unset} from './reducers/hourReducer';

let clickHandler = (hour) => () => {
  console.log(hour);
  store.dispatch(set(hour));
}

let App = () => (
  <Provider store={store}>
    <ul>
      {[9,10,11,12,1,2,3,4,5].map(hour => (
        <li onClick={clickHandler(hour)} key={hour}>{hour}:00 {hour > 8 ? 'AM' : 'PM'}</li>
      ))}
    </ul>
  </Provider>
)

export default App;
