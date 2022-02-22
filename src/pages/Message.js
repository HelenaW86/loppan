import React from "react";
import styled from "styled-components";
import Flower from "components/Flower";
const Div = styled.div`
  margin: 40px auto;
  width: 300px;
  text-align: center;
  background-color: rgba(70, 101, 194, 0.7);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 10px;
`;
const H = styled.h1`
  color: white;
  padding: 10px;
  font-family: "Balsamiq Sans", cursive;

  font-weight: 400;
`;

const Message = ({ messages }) => {
  //   const [start, setStart] = useState(false);
  return (
    <>
      <Div>
        <H>{messages}</H>
        <Flower />
      </Div>
    </>
  );
};

export default Message;
