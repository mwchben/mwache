import * as React from "react";
import { Typography, Link,Box } from "@mui/material";

function Copyright(props) {
  return (
    <>
    <Typography component="div">
          <Box
            sx={{
              letterSpacing: 4,
              m: 1,
              fontFamily: "Monospace",
              textAlign: "left",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            align="center" 
            {...props}>
            {"Copyright © "}       
            <Link color="inherit" className="hover" href="https://github.com/mwchben">
          Mwache
            </Link>
            {" "}{new Date().getFullYear()}
            {"."}
          </Box>
        </Typography>

  
    </>
  );
}

export default Copyright;
