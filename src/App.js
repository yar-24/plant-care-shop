import Navigation from "./pages/Navigation";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <Navigation />
    </Container>
  );
}

export default App;
