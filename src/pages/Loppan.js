import React, { useState, createContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  color: blue;
  font-family: "Fredoka One", cursive;
  font-size: 50px;
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
  // const Context = createContext("Default Value");

  // const value = "My Context Value";
  // return (
  //   <Context.Provider value={value}>
  //     <ColorPalett />
  //   </Context.Provider>
  // );

  const tasks = [
    {
      color: "Teal",
      sentense: "Måla den vackraste tavlan du någonsin gjort 🖌️",
      even: false,
    },
    {
      color: "Tomato",
      sentense: "Måla den vackraste tavlan du någonsin gjort 🖌️",
      even: true,
    },
    {
      color: "red",
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
      color: "RoyalBlue",
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
      color: "DarkViolet",
      sentense: "Gå ut och leta efter insekter i trädgården 🐛",
      even: true,
    },
  ];
  const [isEven, setIsEven] = useState();
  const [numberClicked, setNumberClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleNum = (e) => {
    setLoading(true);

    if (e.target.value % 2 === 0) {
      setIsEven(true);
    } else {
      setIsEven(false);
    }
    setTimeout(() => {
      setLoading(false);
    }, e.target.value * 1000);
    setNumberClicked(true);
  };

  return (
    <Main>
      {loading && <Loader loading={loading} />}
      <Heading>Loppan</Heading>
      {numberClicked ? (
        <ColorPalett tasks={tasks} isEven={isEven} />
      ) : (
        <>
          <P>Räkna till...</P>
          <ButtonContainer>
            {numbers.map((num) => (
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
