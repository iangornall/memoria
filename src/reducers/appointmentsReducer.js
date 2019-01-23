import { createReducer } from 'redux-starter-kit';
import { createAction } from 'redux-starter-kit';

export const add = createAction('appointments/add');
export const remove = createAction('appointments/remove');

const appointmentsReducer = createReducer([], {
  [add]: (state, action) => {
    state.appointments[action.payload.hour] = action.payload.appointment;
  },
  [remove]: (state, action) => {
    state.appointments[action.payload.hour] = null;
  }
})
export default appointmentsReducer;