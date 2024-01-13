import * as React from "react";
import { Avatar } from "@mui/material";
import img from "../Asset/images/pic.png";

function SideB() {
  return (
    <>
      <Avatar alt="Pic" src={img} sx={{ width: 56, height: 56 }} />
    </>
  );
}

export default SideB;
