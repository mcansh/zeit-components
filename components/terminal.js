import styled from 'styled-components';

export const TerminalInput = styled.code`
  -webkit-overflow-scrolling: touch;
  border: 0.1rem solid #eaeaea;
  color: ${props => props.theme.code};
  font-family: ${props => props.theme.monospaced};
  font-size: 1.3rem;
  line-height: 2rem;
  margin: 4rem 0;
  overflow: auto;
  padding: 2rem;
  white-space: pre;
  display: block;

  &::before {
    content: '$ ';
  }
`;

export const TerminalOutput = styled.code`
  background: #000;
  color: #fff;
  font-family: ${props => props.theme.monospaced};
  font-size: 1.3rem;
  line-height: 2rem;
  margin: 4rem 0;
  padding: 2rem;
  display: block;
`;
