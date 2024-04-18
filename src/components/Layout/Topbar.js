import * as React from "react";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

export default function Topbar() {
  return (
    <>
      <Box sx={{ textAlign: "center", m: 1 }}>
        <Button sx={{ color: "#e4e6eb" }}>
          <GitHubIcon className="hover" fontSize="large" /> 
          <XIcon className="hover" fontSize="large" />
        </Button>
      </Box>
    </>
  );
}
