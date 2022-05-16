import styled from "styled-components";

const Header = styled.header`
  text-align: center;
`;

const Section = styled.section`
  text-align: center;
`;

const App = () => (
  <>
    <Header>
      <h1>Parser Combinator in TypeScript</h1>
    </Header>
    <Section>
      <p>Lorem Ipsum</p>
    </Section>
    <Section>
      <input />
      <button>Parse</button>
    </Section>
  </>
);

export default App;
