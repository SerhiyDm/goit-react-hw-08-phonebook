import styled from 'styled-components';


export const Contact = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 7px 15px;
  border-radius: 4px;
  border: none;
  background-color: rgba(251, 255, 255, 0);
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
  box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
  -webkit-box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
  -moz-box-shadow: 0px 0px 2px 0px rgba(177, 221, 244, 0.816);
  font-weight: 700;
  transition: transform 300ms linear;
  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(177, 221, 244, 0.816);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(177, 221, 244, 0.816);
    -moz-box-shadow: 0px 0px 5px 0px rgba(177, 221, 244, 0.816);
    transform: scale(1.05);
  }
`;

