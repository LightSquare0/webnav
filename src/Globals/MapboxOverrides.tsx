import { css } from "@linaria/core";
import NavigationSvg from "../Icons/navigation.svg";

export const mapboxOverrides = css`
  :global() {
    .mapboxgl-user-location-dot {
      position: relative;
      background-color: #FF7324;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .mapboxgl-user-location-dot::before {
      background-color: #FF7324;
      content: "";
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      animation: mapboxgl-user-location-dot-pulse 2s infinite;
    }

    .mapboxgl-user-location-dot,
    .mapboxgl-user-location-dot::before {
      background-color: #FF7324;
      width: 40px;
      height: 40px;
    }

    .mapboxgl-user-location-dot:after {
      background-color: #FF7324;
      border-radius: 50%;
      border: 2px solid #fff;
      content: "";
      width: 42px;
      height: 42px;
      position: absolute;
      /* box-shadow: 0 0 3px rgb(0 0 0 / 35%); */
      background-image: url("/icons/navigation.svg");
      /* object-fit: cover; */
      background-position: center;
      background-repeat: no-repeat;
      background-size: 18px;
    }

    .mapboxgl-user-location-show-heading .mapboxgl-user-location-heading {
    }

    .mapboxgl-user-location-show-heading
      .mapboxgl-user-location-heading::before,
    .mapboxgl-user-location-show-heading
      .mapboxgl-user-location-heading::after {
      content: "";
      /* border-bottom: 7.5px solid #4aa1eb; */
      position: absolute;
    }

    .mapboxgl-user-location-show-heading
      .mapboxgl-user-location-heading::before {
      border-left: 7.5px solid transparent;
      transform: translate(0, -28px) skewY(-20deg);
    }

    .mapboxgl-user-location-show-heading
      .mapboxgl-user-location-heading::after {
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
  }
`;
