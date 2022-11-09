import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const globalStyles = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      min-height: 100%;
      width: 100%;
      overflow: none;
    }
    
    .mapboxgl-user-location-dot {
      background-color: red;
      width: 15px;
      height: 15px;
      border-radius: 50%;
    }
  }
`;
export const FullscreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const InterfaceContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
