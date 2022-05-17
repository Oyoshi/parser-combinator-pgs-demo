import { FC } from "react";
import { StyledButton } from "./button.style";
import { ButtonProps } from "./button.interface";

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
