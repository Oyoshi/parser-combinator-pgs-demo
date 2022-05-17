import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 20px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.secondary};
  border: none;
  transition: all 0.5s ease-out;
  border-radius: 24px;
  padding: 0.25em 1.5em;
  margin: 0 2em;

  :hover {
    background-color: ${({ theme }) => theme.accentDark};
  }
`;
