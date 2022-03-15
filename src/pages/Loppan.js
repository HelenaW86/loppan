import React, { useState } from "react";
import styled from "styled-components";

import Loader from "components/Loader";
import ColorPalett from "../pages/ColorPalett";

const Main = styled.main`
  background-color: #f593c9;
  margin: 0;
  height: 110vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h1`
  color: #4665c2;
  font-family: "Fredoka One", cursive;
  font-size: 50px;
  margin: 40px auto 10px;
`;
const P = styled.p`
  font-size: 23px;
  color: white;
  margin: 10px;
`;
const ButtonContainer = styled.section`
  margin: 40px 10px;
  width: 290px;
`;
const FilteringButton = styled.button`
  margin: 10px;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 10%;
  background-color: #4665c2;
  color: white;
  font-size: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

const Loppan = () => {
  const tasks = [
    {
      color: "Teal",
      sentense: "Bygg ett pappersflygplan ✈️",
      even: false,
      link: "https://gloop.se/pappersflygplan",
    },
    {
      color: "Tomato",
      sentense: "Lek kurragömma 💜",
      even: true,
    },
    {
      color: "red",
      sentense: "Måla den vackraste tavlan du någonsin gjort 🖌️",
      even: false,
      link: "https://www.pinterest.se/Eiwz/saker-att-m%C3%A5la-av/",
    },
    {
      color: "green",
      sentense: "Sätt på din favorit låt och dansa som att ingen ser 💃",
      even: true,
      link: "https://open.spotify.com/",
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
      link: "https://www.recepten.se/recept/kladdmuffins.html",
    },
    {
      color: "yellow",
      sentense: "Skapa med play doh 🍩",
      even: false,
      link: "https://larlek.se/enkelt-play-doh-recept/",
    },
    {
      color: "RoyalBlue",
      sentense: "Spela en låt på synten 🎹",
      even: true,
      link: "https://www.spelapiano.org/latar.html",
    },
    {
      color: "orange",
      sentense: "Ha ett hemma spa med egengjord ansiktsmask 💆‍♀️ ",
      even: false,
      link: "https://skonhetsplaneten.se/gora-egen-ansiktsmask/",
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
      color: "DarkViolet",
      sentense: "Gå ut och leta efter insekter i trädgården 🐛",
      even: true,
      link: "https://www.artdatabanken.se/hjalpa-till/artbestamning-facebook/",
    },
  ];
  const [isEven, setIsEven] = useState();
  const [numberClicked, setNumberClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [counter, setCounter] = useState();

  const handleNum = e => {
    setLoading(true);
    setCounter(e.target.value);

    if (e.target.value % 2 === 0) {
      setIsEven(true);
    } else {
      setIsEven(false);
    }
    setTimeout(() => {
      setLoading(false);
      setNumberClicked(true);
    }, e.target.value * 1450);
  };

  return (
    <Main>
      {loading && <Loader loading={loading} counter={counter} />}
      <Heading>Loppan</Heading>
      {numberClicked ? (
        <ColorPalett tasks={tasks} isEven={isEven} />
      ) : (
        <>
          <P>Räkna till...</P>
          <ButtonContainer>
            {numbers.map(num => (
              <FilteringButton key={num} value={num} onClick={handleNum}>
                {num}
              </FilteringButton>
            ))}
          </ButtonContainer>
        </>
      )}
    </Main>
  );
};

export default Loppan;
