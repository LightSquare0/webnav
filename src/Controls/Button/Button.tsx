import { styled } from "@linaria/react";

export const Button = styled.button`
  min-height: 2.8125rem;
  background-color: hsla(0, 0%, 21.176470588235293%, 0.75);
  border-radius: 0.625rem;
  color: white;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: hsla(0, 0%, 25%, 0.75);
  }
`;
