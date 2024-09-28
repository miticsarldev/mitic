import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroTypeText = () => {
  return (
    <TypeAnimation
      className="text-mitic-1 text-[calc(min(15vh,10.3125em))]"
      sequence={["fondre", 2500, "aimer", 2500, "dégivrer"]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};

export default HeroTypeText;
