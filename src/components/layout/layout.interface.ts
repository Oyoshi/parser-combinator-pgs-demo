import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

type HeaderProps = LayoutProps;
type SectionProps = LayoutProps;
type ContainerProps = LayoutProps;

export type LayoutType = FC<LayoutProps> & {
  Header: FC<HeaderProps>;
  Section: FC<SectionProps>;
  Container: FC<ContainerProps>;
};
