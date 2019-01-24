import React from 'react';
import Container from '../styled-components/Container';
import BackgroundImage from '../styled-components/BackgroundImage';
import Cover from '../styled-components/Cover';
import * as background from '../assets/persistence-of-memory.jpg';
let Wrapper = (props) => (
  <BackgroundImage image={background}>
    <Cover />
    <Container>
      {props.children}
    </Container>
  </BackgroundImage>
);
export default Wrapper;