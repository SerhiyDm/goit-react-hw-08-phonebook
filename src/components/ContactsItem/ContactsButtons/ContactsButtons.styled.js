import styled from 'styled-components';

export const ButtonStyled = styled.button.attrs({ type: 'button' })`
  display: inline-flex;
  align-items: center;
  background-color: ${({ bgcl }) => (bgcl ? bgcl : '#37546d')};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: transform 200ms linear;
  &:hover {
    > svg {
      fill: #ea0e1dd0;
    }
    transform: scale(1.5);
    box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
    -moz-box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
  }

  &:active {
    box-shadow: 0px 0px 2px 0px rgba(234, 14, 29, 0.816) inset;
    -webkit-box-shadow: 0px 0px 2px 0px rgba(234, 14, 29, 0.816) inset;
    -moz-box-shadow: 0px 0px 2px 0px rgba(234, 14, 29, 0.816) inset;
  }
`;

export const ContactPhoneLink = styled.a.attrs(({ tel }) => ({
  href: `tel:${tel}`,
}))`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 4px;
  transition: transform 200ms linear;
  &:hover {
    > svg {
      fill: #9cf2a9d0;
    }
    transform: scale(1.5);
    box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
    -moz-box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
  }
`;
