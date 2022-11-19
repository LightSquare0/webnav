import { styled } from "@linaria/react";

export const DirectionsContainer = styled.div`
  width: 21.25rem;
  height: min-content;
  gap: 0.625rem;
  color: white;
  pointer-events: all;
`;

export const LocationsPicker = styled.div`
  padding: 1.25rem;
  border-radius: 0.9375rem;
  background-color: hsla(0, 0%, 9%, 0.93);
  backdrop-filter: blur(10px);
  border: 1px solid hsla(0, 0%, 17%, 0.3);
`;

export const Header = styled.h1`
  font-size: 1.25rem;
`;
