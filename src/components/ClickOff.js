import React from 'react';
import { connect } from 'react-redux'
import { unset } from '../reducers/hourReducer';
import Cover from '../styled-components/Cover';

let ClickOff = ({dispatch}) => {
  let handleClick = () => {
    dispatch(unset());
  }
  return (
    <Cover background="rgba(0, 0, 0, 0.8)" onClick={handleClick} />
  )
}

export default connect()(ClickOff);