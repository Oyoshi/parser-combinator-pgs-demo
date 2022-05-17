import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
`;

export const Section = styled.section`
  text-align: left;
  margin: 2em 0;

  > code {
    display: block;
    margin: 0.25em 0;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;
