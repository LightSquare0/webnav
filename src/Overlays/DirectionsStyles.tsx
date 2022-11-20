import { styled } from "@linaria/react";

export const DirectionsContainer = styled.div`
  width: 21.25rem;
  height: min-content;
  gap: 0.625rem;
  color: white;
  pointer-events: all;
`;

export const LocationsCardStyled = styled.div`
  display: flex;
  flex-flow: column;
  padding: 1.25rem;
  border-radius: 0.9375rem;
  background-color: hsla(0, 0%, 9%, 0.93);
  backdrop-filter: blur(10px);
  border: 1px solid hsla(0, 0%, 17%, 0.3);
  gap: 0.625rem;
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
`;
export const LocationIcon = styled.img`
  width: 100%;
  grid-area: icon;
`;
export const LocationName = styled.div`
  grid-area: name;
`;

export const LocationDistance = styled.div`
  grid-area: distance;
`;
