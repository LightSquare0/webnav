import { css } from "@linaria/core";
import NavigationSvg from "../Icons/navigation.svg";

export const mapboxOverrides = css`
  .mapboxgl-user-location-dot {
    background-color: #1da1f2;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-image: url("/vite.svg");
  }

  .mapboxgl-user-location-dot::before {
    background-color: #1da1f2;
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    animation: mapboxgl-user-location-dot-pulse 2s infinite;
  }

  .mapboxgl-user-location-dot::after {
    border-radius: 50%;
    border: 2px solid #fff;
    content: "";
    height: 19px;
    left: -2px;
    position: absolute;
    top: -2px;
    width: 19px;
    box-sizing: border-box;
    box-shadow: 0 0 3px rgb(0 0 0 / 35%);
  }

  .mapboxgl-user-location-show-heading .mapboxgl-user-location-heading {
    width: 0;
    height: 0;
  }

  .mapboxgl-user-location-show-heading .mapboxgl-user-location-heading::before,
  .mapboxgl-user-location-show-heading .mapboxgl-user-location-heading::after {
    content: "";
    border-bottom: 7.5px solid #4aa1eb;
    position: absolute;
  }

  .mapboxgl-user-location-show-heading .mapboxgl-user-location-heading::before {
    border-left: 7.5px solid transparent;
    transform: translate(0, -28px) skewY(-20deg);
  }

  .mapboxgl-user-location-show-heading .mapboxgl-user-location-heading::after {
    border-right: 7.5px solid transparent;
    transform: translate(7.5px, -28px) skewY(20deg);
  }

  @keyframes mapboxgl-user-location-dot-pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    70% {
      transform: scale(3);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  .mapboxgl-user-location-dot-stale {
    background-color: #aaa;
  }

  .mapboxgl-user-location-dot-stale::after {
    display: none;
  }

  .mapboxgl-user-location-accuracy-circle {
    background-color: #1da1f233;
    width: 1px;
    height: 1px;
    border-radius: 100%;
  }
`;
