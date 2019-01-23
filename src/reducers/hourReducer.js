import { createReducer } from 'redux-starter-kit';
import { createAction } from 'redux-starter-kit';

export const set = createAction('appointments/set');
export const unset = createAction('appointments/remove');

const appointmentsReducer = createReducer([], {
  [set]: (state, action) => action.payload,
  [unset]: () => -1
});
export default appointmentsReducer;