import { FC } from "react";
import { TypographyType, TitleProps } from "./typography.interface";
import { Title1, Title2, Title3, Text, Code } from "./typography.style";

const Title: FC<TitleProps> = ({ children, level }) => {
  const TitleComponents = {
    1: Title1,
    2: Title2,
    3: Title3,
  };

  const Title = TitleComponents[level];

  return <Title>{children}</Title>;
};

const Typography: TypographyType = ({ children }) => <>{children}</>;

Typography.Title = Title;
Typography.Text = Text;
Typography.Code = Code;

export default Typography;
