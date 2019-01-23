import appointmentsReducer from './appointmentsReducer';
import hourReducer from './hourReducer';

const rootReducer = {
  appointments: appointmentsReducer,
  hour: hourReducer
};
export default rootReducer;