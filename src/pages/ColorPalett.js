import React, { useState } from "react";
import styled from "styled-components";
import Message from "./Message";

const P = styled.p`
  text-align: center;
  color: white;
  font-size: 25px;
  margin: 20px;
`;

const ColorsContainer = styled.div`
  width: 320px;
`;
const ColorPicker = styled.button`
  cursor: pointer;
  width: 130px;
  height: 130px;
  margin: 10px;
  border-radius: 50%;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

const ColorPalett = ({ tasks, isEven }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [linken, setLinken] = useState("");
  const display = tasks.filter(task => task.even === isEven);

  const handleLinken = c => {
    setLinken(c.link);
    setMessage(c.sentense);
    setShowMessage(true);
  };

  return (
    <>
      {showMessage ? (
        <Message messages={message} linken={linken} />
      ) : (
        <ColorsContainer>
          <>
            <P>Välj en färg</P>
            {display.map(color => (
              <ColorPicker
                key={color.color}
                style={{ backgroundColor: `${color.color}` }}
                onClick={() => handleLinken(color)}
              />
            ))}
          </>
        </ColorsContainer>
      )}
    </>
  );
};

export default ColorPalett;
