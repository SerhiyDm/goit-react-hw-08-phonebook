import styled from 'styled-components';

export const ModalStyled = styled.div.attrs({ id: 'modalBox' })`
  position: relative;
  display: flex;
  justify-content: center;
  height: auto;
  background-color: #37546d;
  border-radius: 4px;
  box-shadow: 0px 0px 7px 2px rgb(224, 255, 255);
  -webkit-box-shadow: 0px 0px 7px 2px rgb(224, 255, 255);
  -moz-box-shadow: 0px 0px 7px 2px rgb(224, 255, 255);
  font-size: 26px;
  & > form > button:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 1px 2px rgb(224, 255, 255);
    -webkit-box-shadow: 0px 0px 1px 2px rgb(224, 255, 255);
    -moz-box-shadow: 0px 0px 1px 2px rgb(224, 255, 255);
  }
  & > li:hover {
    transform: scale(1);
  }
`;
export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  & > button {
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
  }
  & > button:hover {
    transform: translateX(-50%);
  }
`;
