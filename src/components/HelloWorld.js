import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 3px;
  padding: 10px 30px;
  margin: 20px 0;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  cursor: pointer;
`;

const HelloWorld = () => (
  <div>
    <div>
      <h1>Hello World</h1>
      <Button>Click me</Button>
    </div>
  </div>
);

export default HelloWorld;
