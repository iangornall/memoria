import { configureStore } from 'redux-starter-kit';

import rootReducer from '../reducers/rootReducer';

const initialState = {
  appointments: []
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
});

export default store;