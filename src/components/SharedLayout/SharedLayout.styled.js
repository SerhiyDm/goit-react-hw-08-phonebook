import styled from 'styled-components';

export const AppWraperStyled = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 10px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 7px 50px;
  box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 100%;
  flex-grow: 1;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  background-color: #37546d;
`;
