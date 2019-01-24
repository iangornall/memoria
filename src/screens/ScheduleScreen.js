import React from 'react';
import { connect } from 'react-redux';
import Wrapper from '../components/Wrapper';
import Modal from '../styled-components/Modal';
import Schedule from '../components/Schedule';
import ModalContent from '../components/ModalContent';
import ClickOff from '../components/ClickOff';
let ScheduleScreen = (props) => (
  <Wrapper>
    <Schedule {...props} />
    {props.hour > -1 &&
      <div>
        <ClickOff />
        <Modal>
          <ModalContent {...props} />
        </Modal>
      </div>
    }
  </Wrapper>
);
let mapStateToProps = (state) => ({
  hour: state.hour,
  appointments: state.appointments
});
export default connect(mapStateToProps)(ScheduleScreen);