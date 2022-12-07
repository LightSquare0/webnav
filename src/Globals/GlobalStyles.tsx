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
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  padding: 0.625rem;
`;

export const MiddleColumn = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  height: 100%;
`;
