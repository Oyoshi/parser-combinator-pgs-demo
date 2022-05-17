import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export type HeaderProps = LayoutProps;
export type SectionProps = LayoutProps & { centered?: boolean };
export type ContainerProps = LayoutProps;

export type LayoutType = FC<LayoutProps> & {
  Header: FC<HeaderProps>;
  Section: FC<SectionProps>;
  Container: FC<ContainerProps>;
};
