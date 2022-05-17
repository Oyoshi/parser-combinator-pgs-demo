import { useState, ChangeEventHandler } from "react";
import Layout from "components/layout";
import Typography from "components/typography";
import Input from "components/input";
import Button from "components/button";

const { Container, Header, Section, CodeSection } = Layout;
const { Title, Text, Code } = Typography;

const App = () => {
  const [parserInput, setParserInput] = useState<string>("");
  const [parserResult, setParserResult] = useState<string>("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setParserInput(e.target.value);

  const handleButtonClick = () => setParserResult(parserInput);

  return (
    <Container>
      <Header>
        <Title level="1">Parser Combinator in TypeScript</Title>
      </Header>
      <Section>
        <Text>
          Polish geographic telephone numbers have 9 digits. The prefix '0' is
          no longer required for the internal calls. So the valid formats are:
          <CodeSection>
            <Code>xx xxx xx xx (within Poland)</Code>
            <Code>+48 xx xxx xx xx (outside Poland)</Code>
          </CodeSection>
        </Text>
        <Text>
          BNF grammar might looks like this:
          <CodeSection>
            <Code>{"<phoneNumber> ::= <fullNumber> | <basicNumber>"}</Code>
            <Code>{"<fullNumber>  ::= <countryCode> <basicNumber>"}</Code>
            <Code>{'<countryCode> ::= "+" <twoDigits>'}</Code>
            <Code>
              {
                "<basicNumber> ::= <areaCode> <spaces> <twoDigits> <spaces> <threeDigits> <spaces> <twoDigits> <spaces> <twoDigits>"
              }
            </Code>
            <Code>{"<areaCode>    ::= <twoDigits>"}</Code>
            <Code>{"<twoDigits>   ::= <digit> <digit>"}</Code>
            <Code>{"<threeDigits> ::= <digit> <digit> <digit>"}</Code>
            <Code>
              {
                '<digit>       ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"'
              }
            </Code>
            <Code>{'<spaces>      ::= " " <spaces> | ""'}</Code>
          </CodeSection>
        </Text>
      </Section>
      <Section centered>
        <Input onChange={handleInputChange} />
        <Button onClick={handleButtonClick}>Parse</Button>
      </Section>
      <Section centered>
        <Title level="2">Parser Result</Title>
        <Text>{parserResult}</Text>
      </Section>
    </Container>
  );
};

export default App;
