import React, { Fragment } from "react";
import TypeAnimation from "react-type-animation";

const Hero = () => {
  return (
    <Fragment>
      <header className="masthead bg-primary text-white text-center">
        <div className="hero-container d-flex align-items-center flex-column">
          <TypeAnimation
            cursor={true}
            sequence={[
              "MERN Stack Developer",
              1000,
              "Redux Development",
              1000,
              "REST APIs",
              1000,
              `C | C++ | OOP`,
              1000,
              "Blockchain Architecture",
              1000,
            ]}
            wrapper="h1"
            repeat={Infinity}
          />
        </div>
      </header>
    </Fragment>
  );
};

export default Hero;
