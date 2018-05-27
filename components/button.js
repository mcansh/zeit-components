import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  color: ${props => (props.dark ? '#000' : '#fff')};
  background: ${props => (props.dark ? '#fff' : '#000')};
  display: inline-flex;
  width: 20rem;
  height: 5rem;
  border: 0.2 solid #000;
  font-size: 1.2rem;
  justify-content: center;
  text-transform: uppercase;
  transition: background 0.2s ease, color 0.2s ease, border 0.2s ease;
  cursor: pointer;
  text-align: center;
  user-select: none;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  font-weight: bold;

  &:hover {
    border: 2px solid ${props => (props.dark ? '#fff' : '#000')};
    color: ${props => (props.dark ? '#fff' : '#000')};
    background: ${props => (props.dark ? '#000' : 'transparent')};
  }
`;

export default Button;
