import * as React from "react";
import { Box } from "@mui/material";
import CodeSharpIcon from "@mui/icons-material/CodeSharp";

export default function Topbar() {
  return (
    <>
      <Box sx={{ textAlign: "center", m: 1 }}>
        <CodeSharpIcon />
      </Box>
    </>
  );
}
