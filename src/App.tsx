import Header from "components/header";
import Section from "components/section";
import Input from "components/input";
import Button from "components/button";

const log = (...args: any) => console.log(...args);

const App = () => (
  <>
    <Header>
      <h1>Parser Combinator in TypeScript</h1>
    </Header>
    <Section>
      <p>Lorem Ipsum</p>
    </Section>
    <Section>
      <Input />
      <Button onClick={() => log("hello", "there")}>Parse</Button>
    </Section>
  </>
);

export default App;
