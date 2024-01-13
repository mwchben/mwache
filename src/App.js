import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Grid, styled, Paper } from "@mui/material";

import SideA from "./components/SideA";
import SideB from "./components/SideB";
import Copyright from "./components/Copyright";
import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={0.5}
      >
        <Item>
          <SideA />
        </Item>
        <Item>
          <SideB />
        </Item>
      </Grid>

      <Container component="main" maxWidth="xs">
        <Copyright />
      </Container>
    </>
  );
}

export default App;
