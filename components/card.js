import styled from 'styled-components';

const Card = styled.div`
  background: ${props => props.background || 'white'};
  padding: 1rem 4rem;
  margin: ${props => props.margin || '2rem'};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
`;

export default Card;
