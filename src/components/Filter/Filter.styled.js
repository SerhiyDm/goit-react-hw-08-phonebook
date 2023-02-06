import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  line-height: 35px;
  font-size: 24px;
  color: #e0cccc;
  cursor: pointer;
`;

export const InputStyled = styled.input.attrs({
  autoFocus: true,
  placeholder: 'Find contacts by name',
})`
  top: 20%;
  padding: 7px 15px;
  border-radius: 4px;
  border: none;
  background-color: rgba(251, 255, 255, 0);
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
  -moz-box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
  font-size: 24px;
  color: #e0cccc;

  &:focus {
    border: none;
    background-color: #142a40;
    outline: none;
    box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
    -moz-box-shadow: 0px 0px 4px 0px rgba(177, 221, 244, 0.816) inset;
  }
`;
export const FilterWraper = styled.div`
  position: fixed;
  top: 30%;
  & > button {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }
  & > button:hover,
  & > button:active {
    transform: translateY(-50%);
    color: red;
  }
`;
