import React, { useState } from "react";
import styled from "styled-components";

const Heading = styled.h1`
  color: blue;
`;
const ButtonContainer = styled.section``;
const FilteringButton = styled.button``;

const Loppan = () => {
  const [isEven, setIsEven] = useState();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const tasks = [{ color: "blue", even: true, sentense: "W" }];
  const handleNum = (event) => {
    if (event.target.value % 2 == 0) {
      setIsEven(true);
    } else {
      setIsEven(false);
    }
  };
  return (
    <>
      <Heading>Hi jag är en loppa!!</Heading>
      <p>Pick a number between 1 and 10 😀</p>
      <ButtonContainer>
        {numbers.map((num) => (
          <FilteringButton key={num} value={num} onClick={handleNum}>
            {num}
          </FilteringButton>
        ))}
      </ButtonContainer>
    </>
  );
};

export default Loppan;
