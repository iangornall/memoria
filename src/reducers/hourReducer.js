import { createReducer } from 'redux-starter-kit';
import { createAction } from 'redux-starter-kit';

export const set = createAction('hour/set');
export const unset = createAction('hour/remove');

const hourReducer = createReducer([], {
  [set]: (state, action) => action.payload,
  [unset]: () => -1
});
export default hourReducer;