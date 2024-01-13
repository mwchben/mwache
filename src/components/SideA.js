import * as React from "react";
import { Box } from "@mui/material";
import background from "../Asset/images/pic.png";

function SideA() {
  return (
    <Box
      component="img"
      sx={{
        // height: 1000,
        // width: 850,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
      }}
      alt="The house from the offer."
      src={background}
    />
  );
}

export default SideA;
