import React from "react";
import { Cover } from "../containers/Cover";
import { About } from "../containers/About";
import { Service } from "../containers/Service";
import { Pricing } from "../containers/Pricing";
import { Apointment } from "../containers/Apointment";
import { Dentist } from "../containers/Dentist";
import { Testimony } from "../containers/Testimony";

const Home = () => {
  return (
    <div>
      <Cover />
      <About />
      <Service />
      <Pricing />
      <Apointment />
      <Dentist />
      <Testimony />
    </div>
  );
};

export default Home;
