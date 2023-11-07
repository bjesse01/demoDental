import React from "react";
import { Testimony } from "../containers/Testimony";
import { Serve } from "../containers/Serve";
import { Header } from "../containers/Header";

const Services = () => {
  return (
    <div>
      <Header title="Service" />
      <Serve />
      <Testimony />
    </div>
  );
};

export default Services;
