import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Box, Stack } from "@mui/material";

import SideA from "./components/SideA";
import SideB from "./components/SideB";
import Copyright from "./components/Copyright";
import "./App.css";

function App() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" spacing={1}>
          <SideA />
          <SideB />
        </Stack>{" "}
      </Box>

      <Container component="main" maxWidth="xs">
        <Copyright />
      </Container>
    </>
  );
}

export default App;
