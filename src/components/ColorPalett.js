import React from "react";
import styled from "styled-components";

const ColorsContainer = styled.div``;
const ColorPicker = styled.button``;

const ColorPalett = ({ tasks, isEven }) => {
  const display = tasks.filter((task) => task.even === isEven);
  const handleColor = (e) => {
    alert(e.target.value);
  };
  return (
    <ColorsContainer>
      {display.map((color) => (
        <ColorPicker
          key={color.color}
          value={color.sentense}
          style={{ backgroundColor: `${color.color}` }}
          onClick={handleColor}
        >
          {color.color}
        </ColorPicker>
      ))}
    </ColorsContainer>
  );
};

export default ColorPalett;
