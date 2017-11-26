import React from "react";
import styled from "styled-components";
import baseStyles from "../styles/baseStyles";
import Sheep from "./sheep.jpg";

const Button = styled.button`
  border-radius: 3px;
  padding: 10px 30px;
  margin: 20px 0;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  cursor: pointer;
`;

const Intro = styled.div`
  background-image: url(${Sheep});
  background-size: contain;
  width: 100vw;
  height: calc(100vw / 2);
`;

const HelloWorld = () => {
  baseStyles();
  return (
    <div>
      <div>
        <Intro />
        <h1>Hello World</h1>
        <Button>Click me</Button>
      </div>
    </div>
  );
};

export default HelloWorld;
