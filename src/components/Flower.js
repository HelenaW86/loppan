import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/trilo-1";
import styled from "styled-components";

const Flower = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={200} width={200} />;
};

export default Flower;
