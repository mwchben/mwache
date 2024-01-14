import * as React from "react";
import { Typography, Link } from "@mui/material";

function Copyright(props) {
  return (
    <>
      <Typography variant="body2" color="#e4e6eb" align="center" {...props}>
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/mwchben">
          Mwache
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}

export default Copyright;
