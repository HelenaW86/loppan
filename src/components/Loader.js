import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/monster";
import styled from "styled-components";

const Loader = ({ loading, counter }) => {
  let [i, setI] = useState(1);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const counting = () => {
    setTimeout(() => {
      if (i <= counter) {
        i++;
        setI(i);
      }
    }, 1450);
  };

  counting();
  return (
    <Div>
      <LoadingContainer>
        <Count>{i}</Count>
        {loading && (
          <Lottie options={defaultOptions} height={300} width={250} />
        )}
      </LoadingContainer>
    </Div>
  );
};

export default Loader;

const Count = styled.p`
  font-size: 50px;
  color: #4665c2;
  font-family: "Fredoka One", cursive;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100vh; ;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
