import { FC, ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
};

export type TitleProps = TypographyProps & { level: "1" | "2" | "3" };
type TextProps = TypographyProps;
type CodeProps = TypographyProps;

export type TypographyType = FC<TypographyProps> & {
  Title: FC<TitleProps>;
  Text: FC<TextProps>;
  Code: FC<CodeProps>;
};
