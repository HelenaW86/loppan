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

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: #4665c2;
  font-size: 20px;
  border: 2px solid #4665c2;
  border-radius: 10px;
  background-color: #f593c9;
`;
const A = styled.a`
  text-decoration: none;
  color: white;
  font-family: "Balsamiq Sans", cursive;
  font-size: 18px;
  &:hover {
    color: pink;
  }
`;

const Message = ({ messages, linken }) => {
  return (
    <>
      <Div>
        <H>{messages}</H>
        {linken && <A href={linken}>Få inspiration</A>}
        <Flower />
      </Div>
      <Button onClick={() => window.location.reload(true)}>Gör om...</Button>
    </>
  );
};

export default Message;
