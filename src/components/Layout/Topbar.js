import * as React from "react";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

export default function Topbar() {
  return (
    <>
      <Box sx={{ textAlign: "center", my: 3 }}>
        <Button sx={{ color: "#D8E9A8" }}>
          <GitHubIcon className="hover" fontSize="large" /> 
          <XIcon className="hover" fontSize="large" />
        </Button>
      </Box>
    </>
  );
}
