import React, { useState } from "react";
import styled from "styled-components";

import ColorPalett from "./ColorPalett";

const Heading = styled.h1`
  color: blue;
`;
const ButtonContainer = styled.section``;
const FilteringButton = styled.button``;

const Loppan = () => {
  const tasks = [
    {
      color: "RoyalBlue",
      sentense: "Måla den vackraste tavlan du någonsin gjort 🖌️",
      even: false,
    },
    {
      color: "green",
      sentense: "Sätt på din favorit låt och dansa som att ingen ser 💃",
      even: true,
    },
    {
      color: "purple",
      sentense: "Städa ditt rum 🙃",
      even: false,
    },
    {
      color: "HotPink",
      sentense: "Baka chokladmuffins 👩‍🍳",
      even: true,
    },
    {
      color: "yellow",
      sentense: "Skapa med play doh",
      even: false,
    },
    {
      color: "red",
      sentense: "Spela en låt på synten 🎹",
      even: true,
    },
    {
      color: "orange",
      sentense: "Ha ett hemma spa med egengjord ansiktsmask 💆‍♀️ ",
      even: false,
    },
    {
      color: "Chartreuse",
      sentense: "Bygg en koja för dig och gossedjuren 🧸",
      even: true,
    },
    {
      color: "DarkTurquoise",
      sentense: "Lägg ett puzzel 🧩 ",
      even: false,
    },
    {
      color: "Magenta",
      sentense: "Gå ut och leta efter insekter i trädgården 🐛",
      even: true,
    },
  ];
  const [isEven, setIsEven] = useState();
  const [numberClicked, setNumberClicked] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleNum = (e) => {
    if (e.target.value % 2 === 0) {
      setIsEven(true);
    } else {
      setIsEven(false);
    }
    setNumberClicked(true);
  };
  return (
    <>
      <Heading>Loppan</Heading>
      <p>Välg ett nummer mellan 1 och 10 😀</p>
      <ButtonContainer>
        {numbers.map((num) => (
          <FilteringButton key={num} value={num} onClick={handleNum}>
            {num}
          </FilteringButton>
        ))}
      </ButtonContainer>
      {numberClicked && <ColorPalett tasks={tasks} isEven={isEven} />}
    </>
  );
};

export default Loppan;
