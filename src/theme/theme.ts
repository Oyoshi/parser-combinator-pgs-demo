interface Theme {
  fontFamily: string;
  background: string;
  backgroundDark: string;
  primary: string;
  secondary: string;
  accent: string;
  accentDark: string;
}

export const theme: Theme = {
  fontFamily: '"Roboto", sans-serif',
  background: "#ffffff",
  backgroundDark: "#eeeeff",
  primary: "#040d2d",
  secondary: "#ffffff",
  accent: "#6161f3",
  accentDark: "#4343a8",
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
