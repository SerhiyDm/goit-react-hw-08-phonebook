import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
`;
export const UserMenuStyled = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  max-width: 1000px;
  & > button {
    background-color: #38393b00;
  }
  & > button:hover {
    background-color: #e42e2ef1;
    box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745);
    -webkit-box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745);
    -moz-box-shadow: 0px 0px 2px 1px rgba(55, 84, 109, 0.745);
  }
  & > a {
    border-radius: 4px;
    animation: colorChange 2s linear reverse infinite;
    @keyframes colorChange {
      0% {
        background-color: #37546daa;
      }
      25% {
        background-color: #37546dcb;
      }
      50% {
        background-color: #37546dfd;
      }
      75% {
        background-color: #37546dab;
      }
      100% {
        background-color: #37546daa;
      }
    }
  }
`;

export const UserNameBox = styled.span`
  display: inline-flex;
  align-items: center;
  color: #37546d;
  font-weight: 700;
`;
