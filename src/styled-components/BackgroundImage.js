import styled from 'styled-components';
let BackgroundImage = styled.div`
  background: top / cover no-repeat url(${props => props.image});
  width: 100%;
  min-height: 100%;
  display: flex;
`;
export default BackgroundImage;