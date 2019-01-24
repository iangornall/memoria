import React from 'react';
import Form from './Form';
let Modal = ({hour}) => (
  <div>
    <h1>{hour} {hour > 8 ? 'AM' : 'PM'}</h1>
    <Form />
  </div>
);
export default Modal;