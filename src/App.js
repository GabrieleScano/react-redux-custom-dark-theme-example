import styled from "styled-components";
import './App.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;

function App() {
  return (
    <Container>
    <h1>My Theme</h1>
    <p>
      <input type="checkbox"></input> Use Theme
    </p>
  </Container>
  );
}

export default App;
