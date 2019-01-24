import styled from 'styled-components';
let Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => props.background || "rgba(255, 255, 255, 0.8)"};
  width: 100%;
  height: 100%;
`;
export default Cover;