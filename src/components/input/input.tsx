import { FC } from "react";
import { StyledInput } from "./input.style";
import { InputProps } from "./input.interface";

const Input: FC<InputProps> = ({ onChange }) => (
  <StyledInput onChange={onChange} />
);

export default Input;
