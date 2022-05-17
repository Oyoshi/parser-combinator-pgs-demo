import Header from "components/header";
import Section from "components/section";
import Input from "components/input";
import Button from "components/button";
import { log } from "utils/logger";

import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

const App = () => (
  <Container>
    <Header>
      <h1>Parser Combinator in TypeScript</h1>
    </Header>
    <Section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <code>{"<phoneNumber> ::= <fullNumber> | <basicNumber>"}</code>
      <code>{"<fullNumber> ::= <areaCode> <basicNumber>"}</code>
      <code>
        {"<basicNumber> ::= <spaces> <fourDigits> <spaces> <fourDigits>"}
      </code>
      <code>{"<fourDigits> ::= <digit> <digit> <digit> <digit>"}</code>
      <code>{'<areaCode> ::= "(" <digit> <digit> ")"'}</code>
      <code>
        {
          '<digit> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"'
        }
      </code>
      <code>{'<spaces> ::= " " <spaces> | ""'}</code>
    </Section>
    <Section>
      <Input />
      <Button onClick={() => log("hello", "there")}>Parse</Button>
    </Section>
  </Container>
);

export default App;
