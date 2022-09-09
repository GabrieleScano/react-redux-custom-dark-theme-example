import React from "react";
import styled from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import DarkThemeProvider from "./DarkThemeProvider";
import store from "./store";
import DarkThemeToggle from "./DarkThemeToggle";

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

const App = () => (
  <ReduxProvider store={store}>
    <DarkThemeProvider>
      <Container>
        <h1>My Dark Theme Is Better Than Yours</h1>
     
          <DarkThemeToggle />
     
      </Container>
    </DarkThemeProvider>
  </ReduxProvider>
);

export default App;