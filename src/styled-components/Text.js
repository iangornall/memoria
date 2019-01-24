import styled from 'styled-components';
let Text = styled.div`
  font-size: ${props => props.size || 'inherit'};
  font-weight: ${props => props.weight || 'normal'};
  line-height: ${props => props.lineHeight || 'normal'};
  margin-bottom: ${props => props.marginBottom || 0};
  margin-top: ${props => props.marginTop || 0}
`
export default Text;