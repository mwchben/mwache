import * as React from "react";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import Link from '@mui/material/Link';

export default function Topbar() {
  return (
    <>
      <Box sx={{ textAlign: "center", my: 3 }}>
        <Button sx={{ color: "#D8E9A8" }}>
          
          <Link href="https://github.com/mwchben" target="_blank" >
          <GitHubIcon className="hover" fontSize="large"/> 
          </Link>
          <Link href="https://twitter.com/" target="_blank" >
          <XIcon className="hover" fontSize="large" /> 
          </Link>
          
        </Button>
      </Box>
    </>
  );
}
