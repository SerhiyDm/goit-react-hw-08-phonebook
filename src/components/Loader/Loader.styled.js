import styled from 'styled-components';

export const Loader = styled.div`
  position: fixed;
  bottom: 0;
  left: 20px;
  background-color: #64dbf3;
  width: 20px;
  height: 0px;
  border-radius: 15px;
  animation: progres 4s infinite linear;
  @keyframes progres {
    0% {
      height: 0%;
      background-color: yellow;
    }
    25% {
      height: 50%;
    }
    50% {
      height: 75%;
      background-color: #e1ff0054;
    }
    75% {
      height: 85%;
      background-color: #64dbf3;
    }
    100% {
      height: 100%;
    }
  } ;
`;
