import React from 'react';
import {set, unset} from '../reducers/hourReducer';

let clickHandler = (dispatch, hour) => () => {
  dispatch(set(hour));
}

let Schedule = ({dispatch, hour, appointments}) => (
  <div>
    <ul>
      {[9,10,11,12,1,2,3,4,5].map(hour => (
        <li 
          onClick={clickHandler(dispatch, hour)} 
          key={hour}
          className={appointments[hour] && "red"}
        >
          {hour}:00 {hour > 8 ? 'AM' : 'PM'}
        </li>
      ))}
    </ul>
    <div>
      {hour}
    </div>
  </div>
);

export default Schedule;