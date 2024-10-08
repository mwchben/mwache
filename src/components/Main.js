import * as React from "react";
import Topbar from "./Layout/Topbar";
import Content from "./Layout/Content";
import Portfolio from '../Asset/Theme/Portfolio';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Main() {
  const myTheme = createTheme(Portfolio());
  return (
    <ThemeProvider theme={myTheme}>
      <Topbar />
      <Content />
    </ThemeProvider>
  );
}

