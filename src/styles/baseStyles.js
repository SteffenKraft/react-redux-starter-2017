import { injectGlobal } from "styled-components";
import reset from "styled-reset";

/* stylelint-disable */
const baseStyles = () => injectGlobal`
  ${reset}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default baseStyles;
