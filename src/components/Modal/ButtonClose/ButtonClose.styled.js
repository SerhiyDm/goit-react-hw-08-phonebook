import styled from 'styled-components';

export const ButtonCloseStyled = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #757575;
  border: none;
  cursor: pointer;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 4px 0px rgba(224, 204, 204, 0.893);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(224, 204, 204, 0.893);
    -moz-box-shadow: 0px 0px 4px 0px rgba(224, 204, 204, 0.893);
    &:hover svg {
      color: red;
    }
  }
  &:active {
    transform: scale(0.8);
  }
`;
