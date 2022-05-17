import { useState, ChangeEventHandler } from "react";
import Layout from "components/layout";
import Typography from "components/typography";
import Input from "components/input";
import Button from "components/button";
import { log } from "utils/logger";

const { Container, Header, Section } = Layout;
const { Title, Text, Code } = Typography;

const App = () => {
  const [parserInput, setParserInput] = useState<string>("");
  const [parserResult, setParserResult] = useState<string>("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setParserInput(e.target.value);

  // const handleButtonClick = () => pipe(parse, setParserResult);

  return (
    <Container>
      <Header>
        <Title level="1">Parser Combinator in TypeScript</Title>
      </Header>
      <Section>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Code>{"<phoneNumber> ::= <fullNumber> | <basicNumber>"}</Code>
        <Code>{"<fullNumber> ::= <areaCode> <basicNumber>"}</Code>
        <Code>
          {"<basicNumber> ::= <spaces> <fourDigits> <spaces> <fourDigits>"}
        </Code>
        <Code>{"<fourDigits> ::= <digit> <digit> <digit> <digit>"}</Code>
        <Code>{'<areaCode> ::= "(" <digit> <digit> ")"'}</Code>
        <Code>
          {
            '<digit> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"'
          }
        </Code>
        <Code>{'<spaces> ::= " " <spaces> | ""'}</Code>
      </Section>
      <Section>
        <Input onChange={handleInputChange} />
        <Button onClick={() => log("hello", "there")}>Parse</Button>
      </Section>
      <Section>
        <Title level="2">Parser Result</Title>
        <Text>{parserResult}</Text>
      </Section>
    </Container>
  );
};

export default App;
