import React from 'react';
import { node, string } from 'prop-types';
import Link from 'next/link';
import isAbsoluteUrl from 'is-absolute-url';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.links};
  font-size: inherit;
`;

const CustomLink = ({ children, ...props }) => {
  const isExternal = isAbsoluteUrl(props.href);
  return (
    <Link {...props} passHref>
      <StyledLink
        rel={isExternal && 'noopener noreferrer'}
        target={isExternal && '_blank'}
      >
        {children}
      </StyledLink>
    </Link>
  );
};

CustomLink.propTypes = {
  children: node.isRequired,
  href: string.isRequired,
};

export default CustomLink;
