import { styled } from "@linaria/react";

export const DirectionsContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 21.25rem;
  height: min-content;
  gap: 0.625rem;
  margin-top: 0.625rem;
  color: white;
  pointer-events: all;
`;

export const LocationsCardStyled = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.625rem;
  padding: 1.25rem;
  border-radius: 0.9375rem;
  background-color: hsla(0, 0%, 9%, 0.93);
  backdrop-filter: blur(10px);
  border: 1px solid hsla(0, 0%, 17%, 0.3);
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.h1`
  font-size: 1.25rem;
`;

export const LocationResult = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1.5rem 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "icon name"
    "icon distance";
  column-gap: 0.75rem;
`;

export const LocationIcon = styled.img`
  width: 100%;
  grid-area: icon;
  margin-block: auto;
`;

export const LocationName = styled.div`
  grid-area: name;
`;

export const LocationDistance = styled.div`
  grid-area: distance;
  font-family: "Lexend Deca Light";
  color: hsla(0, 0%, 67%, 1);
`;
