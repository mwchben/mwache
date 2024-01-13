import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import Main from "./components/Main";
import Copyright from "./components/Copyright";
import "./App.css";

function App() {
  return (
    <>
      <Main />

      <Container component="main" maxWidth="xs">
        <Copyright />
      </Container>
    </>
  );
}

export default App;
