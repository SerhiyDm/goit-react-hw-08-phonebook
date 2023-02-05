import styled from 'styled-components';

export const FormStyled = styled.form.attrs(({ autoComplete }) => ({
  autocomplete: autoComplete,
}))`
  width: 30vw;
  padding: 20px 10px;
  display: inline-flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
