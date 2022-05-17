import { useState, ChangeEventHandler } from "react";
import Layout from "components/layout";
import Typography from "components/typography";
import Input from "components/input";
import Button from "components/button";
import { phoneNumberParser, showParserResult, parse } from "parser";

const { Container, Header, Section, CodeSection } = Layout;
const { Title, Text, Code } = Typography;

const App = () => {
  const [parserInput, setParserInput] = useState<string>("");
  const [parserResult, setParserResult] = useState<string>("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setParserInput(e.target.value);

  const handleButtonClick = () =>
    setParserResult(showParserResult(parse(phoneNumberParser, parserInput)));

  return (
    <Container>
      <Header>
        <Title level="1">Parser Combinator in TypeScript</Title>
      </Header>
      <Section>
        <Text>
          Polish geographic telephone numbers have 9 digits. The prefix '0' is
          no longer required for the internal calls. So the valid formats are:
        </Text>
        <CodeSection>
          <Code>xx xxx xx xx (within Poland)</Code>
          <Code>+48 xx xxx xx xx (outside Poland)</Code>
        </CodeSection>
        <Text>
          We want to parse given number to the format: '+48xxxxxxxxx' when its
          valid or show proper error message otherwise.
        </Text>
        <Text>
          Based on this the <strong>BNF</strong> grammar might looks like this:
        </Text>
        <CodeSection>
          <Code>{"<phoneNumber> ::= <fullNumber> | <basicNumber>"}</Code>
          <Code>
            {"<fullNumber>  ::= <countryCode> <spaces> <basicNumber>"}
          </Code>
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
      </Section>
      <Section centered>
        <Input onChange={handleInputChange} />
        <Button onClick={handleButtonClick}>Parse</Button>
      </Section>
      <Section centered>
        {parserResult && <Title level="2">The result is: {parserResult}</Title>}
      </Section>
    </Container>
  );
};

export default App;
