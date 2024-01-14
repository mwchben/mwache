import * as React from "react";
import { Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";

let myLangs = new Array(["fwaerfa", "sdfas", "ifv"]);

const hellos = () => {
  for (let i = 0; i < myLangs.length; i++) {
    let word = [i];
    return <p>word</p>;
  }
};

setInterval(hellos, 50);

export default function Content() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={5}>
        {" "}
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
          >
            Dear Friend {hellos()}
          </Box>
        </Typography>
        <Typography component="div">
          <Box
            sx={{
              letterSpacing: 4,
              m: 1,
              fontFamily: "Monospace",
              textAlign: "Center",
              fontWeight: "Bold",
              textTransform: "capitalize",
            }}
          >
            Once upon a time, I was born as a genius baby in Seoul. 19 years
            later, I flew to Chicago to study design, and now, I have become a
            fully grown design nerd and a UI/UX designer in NYC at WIX.com's
            Playground. I love playful interaction design, minimalism, and happy
            dogs. Once upon a time, I was born as a genius baby in Seoul. 19
            years later, I flew to Chicago to study design, and now, I have
            become a fully grown design nerd and a UI/UX designer in NYC at
            WIX.com's Playground. I love playful interaction design, minimalism,
            and happy dogs. Once upon a time, I was born as a genius baby in
            Seoul. 19 years later, I flew to Chicago to study design, and now, I
            have become a fully grown design nerd and a UI/UX designer in NYC at
            WIX.com's Playground. I love playful interaction design, minimalism,
            and happy dogs. Once upon a time, I was born as a genius baby in
            Seoul. 19 years later, I flew to Chicago to study design, and now, I
            have become a fully grown design nerd and a UI/UX designer in NYC at
            WIX.com's Playground. I love playful interaction design, minimalism,
            and happy dogs.
          </Box>
        </Typography>{" "}
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
          >
            Yours Sincerly,
          </Box>
        </Typography>
        <Typography component="div">
          <Box
            sx={{
              letterSpacing: 4,
              m: 1,
              fontFamily: "Pacifico",
              textAlign: "left",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {" "}
            Benjamin Mwangi
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
}
