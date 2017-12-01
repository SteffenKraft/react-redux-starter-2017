import React from "react";
import styled from "styled-components";

import Sheep from "./sheep.jpg";
import Button from "../shared/Button";

const Intro = styled.div`
  background-image: url(${Sheep});
  height: calc(100vw / 4);
  background-size: contain;
  width: calc(100vw / 2);
`;

const handleClick = () => {
  // console.log("clicked");
};

const HomeView = () => (
  <div>
    <Intro />
    <h1>Hello React Redux Starter 2017</h1>
    <Button onClick={handleClick}>I am the default Button</Button>
    <Button type="secondary" onClick={handleClick}>
      I am the secondary Button
    </Button>
    <Button type="disabled">I am the disabled Button</Button>
  </div>
);

export default HomeView;
