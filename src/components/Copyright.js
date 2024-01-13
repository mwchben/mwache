import * as React from "react";
import { Typography, Link, Chip, Divider } from "@mui/material";

function Copyright(props) {
  return (
    <>
      <Divider sx={{ my: 3 }} light={true}>
        <Chip label="🙂🙂🙂🙂🙂🙂" size="small" />
      </Divider>
      <Typography variant="body2" color="#e4e6eb" align="center" {...props}>
        {"Copyright © "}
        <Link color="inherit" href="https://github/mwchben.com/">
          Mwache
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}

export default Copyright;
