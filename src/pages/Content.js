import React from "react";
import { About } from "../containers/About";
import { Testimony } from "../containers/Testimony";
import { Dentist } from "../containers/Dentist";
import { Header } from "../containers/Header";

const Content = () => {
  return (
    <div>
      <Header title="About Us" />
      <About />
      <Testimony />
      <Dentist />
    </div>
  );
};

export default Content;
