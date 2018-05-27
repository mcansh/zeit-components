import styled, { css } from 'styled-components';

export const CodeSnippet = styled.pre`
  border: 0.1rem solid #eaeaea;
  padding: 2rem;
  margin: 4rem 0;
  white-space: pre;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Code = styled.code`
  color: ${props => props.theme.code};
  font-family: ${props => props.theme.monospaced};
  white-space: pre-wrap;
  &::before,
  &::after {
    ${props =>
      props.snippet
        ? css`
            content: none;
          `
        : css`
            content: '\0060';
          `};
  }
`;
