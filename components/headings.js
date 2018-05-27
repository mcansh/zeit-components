import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
`;

export const H2 = styled.h2`
  font-weight: normal;
  font-size: 2.4rem;
`;

export const H3 = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
`;

export const P = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;

export const Error = styled.p`
  position: relative;
  color: ${props => props.theme.error};
  font-size: 1.4rem;
  min-height: 1.7rem;
  margin: 0;
`;
