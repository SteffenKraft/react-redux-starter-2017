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
    <Button inverse onClick={handleClick}>
      I am a inverse default Button
    </Button>
    <Button fullWidth type="secondary" onClick={handleClick}>
      I am A secondary Button
    </Button>
    <Button inverse fullWidth type="secondary" onClick={handleClick}>
      I am a inverse secondary Button
    </Button>
    <Button type="disabled">I am the disabled Button</Button>
    <Button inverse type="disabled">
      I am a inverse disabled Button
    </Button>
  </div>
);

export default HomeView;
