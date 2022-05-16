interface Theme {
  background: string;
  primary: string;
}

export const theme: Theme = {
  background: "#ffffff",
  primary: "#040d2d",
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
