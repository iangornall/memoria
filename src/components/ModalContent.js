import React from 'react';
import Tile from '../styled-components/Tile';
import Text from '../styled-components/Text';
import Wrapper from './Wrapper';
import Form from './Form';
let ModalContent = ({hour}) => (
  <Wrapper>
    <Tile nohover>
      <Text as="h2" size="1.5rem" weight="bold">{hour}:00 {hour > 8 && hour < 12 ? 'AM' : 'PM'}</Text>
    </Tile>
    <Form />
  </Wrapper>
);
export default ModalContent;