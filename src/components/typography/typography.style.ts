import styled, { DefaultTheme } from "styled-components";

const commonTitleStyles = (theme: DefaultTheme) => `
   font-weight: bold;
   color: ${theme.primary};
   margin: 0;
`;

export const Title1 = styled.h1`
  ${({ theme }) => commonTitleStyles(theme)};
  font-size: 32px;
`;

export const Title2 = styled.h2`
  ${({ theme }) => commonTitleStyles(theme)};
  font-size: 28px;
`;

export const Title3 = styled.h3`
  ${({ theme }) => commonTitleStyles(theme)};
  font-size: 24px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
`;

export const Code = styled.code`
  color: ${({ theme }) => theme.primary};
  display: block;
  margin: 0.25em 0;
`;
