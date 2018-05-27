import React from 'react';
import styled, { css } from 'styled-components';
import { string, arrayOf } from 'prop-types';
import shortid from 'shortid';

const UL = styled.ul`
  padding: 0;
  list-style-type: none;
  margin-left: 1.5rem;
`;

const OL = styled.ol`
  padding: 0;
  margin-left: 15px;
`;

const LI = styled.li`
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    display: inline-block;
    color: #999;
    position: absolute;
    margin-left: -15px;
    ${props =>
      props.type === 'ul'
        ? css`
            content: '-';
          `
        : css`
            content: none;
          `};
  }
`;

const List = ({ items, type }) => {
  const children = items.map(item => (
    <LI type={type} key={shortid.generate()}>
      {item}
    </LI>
  ));
  if (type === 'ul') {
    return <UL>{children}</UL>;
  }
  return <OL>{children}</OL>;
};

List.propTypes = {
  items: arrayOf(string).isRequired,
  type: string,
};

List.defaultProps = {
  type: 'ul',
};

export default List;
