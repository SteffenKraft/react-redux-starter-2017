import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonStyled = styled.button`
  display: block;
  border-radius: 3px;
  padding: 10px 30px;
  margin: 20px 0;
  background: transparent;
  color: green;
  border: 2px solid green;
  cursor: pointer;
  width: 100%;
`;

const ButtonStyledSecondary = ButtonStyled.extend`
  color: red;
  border: 2px solid red;
`;

const ButtonStyledDisabled = ButtonStyled.extend`
  color: grey;
  border: 2px solid grey;
`;

const buttons = {
  default: ButtonStyled,
  secondary: ButtonStyledSecondary,
  disabled: ButtonStyledDisabled,
};

const Button = ({ onClick, type, children }) => {
  const ButtonType = buttons[type || "default"];
  return <ButtonType onClick={onClick}>{children}</ButtonType>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: null,
  type: "",
};

export default Button;
