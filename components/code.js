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
  font-family: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif';
  font-size: 0.9em;
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
