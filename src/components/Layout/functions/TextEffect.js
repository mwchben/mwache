import React from "react";

import { Cursor, Typewriter } from "react-simple-typewriter";

function TextEffext() {
  return (
    <h1>
      {""}
      <span>
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
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <span style={{ color: "green" }}>
        <Cursor />
      </span>
    </h1>
  );
}

export default TextEffext;
