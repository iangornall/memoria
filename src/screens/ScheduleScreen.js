import React from 'react';
import Schedule from '../components/Schedule';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
let ScheduleScreen = (props) => (
  <div>
    <Schedule {...props} />
    {props.hour > -1 && <Modal {...props} />}
  </div>
);
let mapStateToProps = (state) => ({
  hour: state.hour,
  appointments: state.appointments
});
export default connect(mapStateToProps)(ScheduleScreen);