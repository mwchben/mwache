import React from "react";

import { Cursor, Typewriter } from "react-simple-typewriter";
import { Typography, Box } from "@mui/material";

function TextEffext() {
  return (
    <h2>
      {""}
      <Typography component="div">
        <Box sx={{ 
           textAlign: 'center',
           m: 1,
           letterSpacing: 4,
           fontFamily: "Monospace",
           fontWeight: "bold",
              
         }}>
          <Typewriter
              words={[
                "Ciao!",
                "Sasa!",
                "Bonjour!",
                "Hola!",
                "こんにちは！",
                "Привіт!",
                "હેલો ત્યાં!",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
        </Box>
          
        </Typography>
      <span style={{ color: "green" }}>
        <Cursor />
      </span>
    </h2>
  );
}

export default TextEffext;
