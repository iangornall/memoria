import styled from 'styled-components';
let Button = styled.button`
  display: inline-block;
  padding: 1em 1.5em;
  font-weight: bold;
  outline: none;
  border: none;
  background: ${props => props.backgroundColor || "#333"};
  color: ${props => props.textColor || "#FFF"};
  text-decoration: none;
  transition: background 600ms;
  cursor: pointer;
  :hover {
    background: ${props => props.hoverBackgroundColor || props.backgroundColor || "#000"};
  }
`;
export default Button;