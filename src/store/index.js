import { configureStore } from 'redux-starter-kit';

import rootReducer from '../reducers/rootReducer';

const initialState = {
  appointments: [],
  hour: 0
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
});

export default store;