import * as React from "react";
import Topbar from "./Environment/Topbar";
import { Typography, Box } from "@mui/material";

function SideB() {
  return (
    <>
      <Topbar />
      <Typography component="div">
        <Box sx={{ letterSpacing: 6, m: 1, fontFamily: "Monospace" }}>
          Letter Spacing 6px.
        </Box>
      </Typography>
    </>
  );
}

export default SideB;
