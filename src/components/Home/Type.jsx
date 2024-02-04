import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "MERN Stack Developer",
              "Mobile Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 20,
          }}
        />
      )
}

export default Type