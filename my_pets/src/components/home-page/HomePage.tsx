import React, { useState, useRef } from "react";
import { Header } from "./Header";
import { Hero } from "./hero";
import { Servicii } from "./Servicii";
import { LoginForm } from "./LoginForm";
import { Adopt } from "./Adopt";
import { Cabinete } from "./Cabinete";
import { PetReg } from "./PetReg";
import { Bottom } from "./Bottom";

export const HomePage = () => {
  const loginFormRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState("left");

  const scrollSpreLogin = () => {
    if (loginFormRef.current) {
      loginFormRef.current.scrollIntoView({ behavior: "smooth" });
      setPosition((prevPosition) =>
        prevPosition === "left" ? "right" : "left"
      );
    }
  };

  return (
    <React.Fragment>
      <Header scrollSpreLogin={scrollSpreLogin} />
      <Hero />
      <Servicii />
      <LoginForm loginFormRef={loginFormRef} />
      <Adopt />
      <Cabinete />
      <PetReg />
      <Bottom />
    </React.Fragment>
  );
};
