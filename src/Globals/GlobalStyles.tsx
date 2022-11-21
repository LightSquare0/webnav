import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const globalStyles = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @font-face {
      font-family: "Lexend Deca Regular";
      src: url("fonts/LexendDeca-Regular.ttf");
    }

    @font-face {
      font-family: "Lexend Deca Light";
      src: url("fonts/LexendDeca-Light.ttf");
    }

    html,
    body {
      height: 100%;
      min-height: 100%;
      width: 100%;
      overflow: none;
      font-family: "Lexend Deca Regular";
    }
  }
`;
export const FullscreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const InterfaceOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;
