import React from 'react';
import Tile from '../styled-components/Tile';
import Text from '../styled-components/Text';
import {set} from '../reducers/hourReducer';

let Schedule = ({dispatch, hour, appointments}) => {
  let clickHandler = (dispatch, hour) => () => {
    dispatch(set(hour));
  };
  return (
    <div>
      <Tile nohover>
        <Text as="h1" size="1.5rem" weight="bold">La Persistència de la Memòria</Text>
      </Tile>
      <ul>
        {[9,10,11,12,1,2,3,4,5].map(hour => (
          <Tile as="li" 
            onClick={clickHandler(dispatch, hour)} 
            key={hour}
            className={appointments && appointments[hour] && "red"}
          >
            {hour}:00 {hour > 8 && hour < 12 ? 'AM' : 'PM'}
          </Tile>
        ))}
      </ul>
      <div>
        {hour}
      </div>
    </div>
  )
}

export default Schedule;