import styled from 'styled-components';
let Modal = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  max-width: 90%;
  min-width: 20rem;
  transform: translateX(-50%);
  background: ${props => props.background || "#FFF"};
  opacity: ${props => props.opacity || 1};
`;
export default Modal;