import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonStyled = styled.button.attrs({ type: 'submit' })`
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #41475b05;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745);
  -webkit-box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745);
  -moz-box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745);
  font-weight: 700;
  font-size: 18px;
  color: #e0cccc;
  transition: transform 200ms linear;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
    -webkit-box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
    -moz-box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
  }

  &:active {
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75) inset;
    transform: scale(1);
  }
`;
export const ButtonsWraper = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  & > button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0px 0px 1px 0px rgba(177, 221, 244, 0.816) inset;
    -webkit-box-shadow: 0px 0px 1px 0px rgba(177, 221, 244, 0.816) inset;
    -moz-box-shadow: 0px 0px 1px 0px rgba(177, 221, 244, 0.816) inset;
  }
  & > button:active {
    box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816) inset;
    -webkit-box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816) inset;
    -moz-box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816) inset;
  }
`;
export const ButtonLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 50px;
  height: 30px;
  text-decoration: none;
  background-color: #37546da5;
  border-radius: 35%;
  line-height: 0.7em;
  font-weight: 700;
  font-size: 0.7em;
  color: #e0cccc;
  &:hover {
    box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745) inset;
    -webkit-box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745) inset;
    -moz-box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745) inset;
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const ButtonLink2 = styled(NavLink)`
  display: inline-flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #37546da5;
`;
