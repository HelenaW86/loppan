import React from "react";
import styled from "styled-components";
const Div = styled.div`
  margin: 40px auto;
  width: 310px;
  background-color: grey;
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
    <Div>
      <H>{messages}</H>
    </Div>
  );
};

export default Message;
