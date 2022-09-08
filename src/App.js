import styled from "styled-components";
import './App.css';
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;

  background-color: ${backgroundColor};
  color: ${textColor};

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
