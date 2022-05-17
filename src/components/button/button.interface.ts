import { ReactNode, MouseEventHandler } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
