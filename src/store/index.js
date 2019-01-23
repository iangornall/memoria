import { configureStore } from 'redux-starter-kit';

import rootReducer from '../reducers';

const initialState = {
  appointments: []
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
});

export default store;