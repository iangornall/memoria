import styled from 'styled-components';
let Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  min-height: 3rem;
  max-width: 25rem;
  transition: border 300ms;
  cursor: ${props => props.nohover ? "auto" : "pointer"};

  :hover {
    border: 1px solid rgba(0, 0, 0, ${props => props.nohover ? 0.3 : 0});
  }
`;
export default Tile;