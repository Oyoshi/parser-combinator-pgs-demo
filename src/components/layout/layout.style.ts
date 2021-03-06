import styled from "styled-components";
import { SectionProps } from "./layout.interface";

export const Header = styled.header`
  margin: 1em 0;
  text-align: center;
`;

export const Section = styled.section<SectionProps>`
  text-align: ${({ centered }) => (centered ? "center" : "left")};
  margin: 2em 0;
`;

export const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 60%;
`;

export const CodeSection = styled.div`
  background-color: ${({ theme }) => theme.backgroundDark};
  margin: 0.5em 0;
  padding: 0.5em;
`;
