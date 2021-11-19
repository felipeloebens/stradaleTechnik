import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "+ POTÊNCIA",
          "+ TORQUE",
          "STAGE 1",
          "STAGE 2",
          "STAGE 3",
          "STAGE XX",
          "POPS & BANGS",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
