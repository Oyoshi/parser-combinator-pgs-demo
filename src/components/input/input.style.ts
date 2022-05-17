import styled from "styled-components";

export const StyledInput = styled.input`
  text-align: center;
  font-size: 20px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.accent};
  outline: none;
`;
