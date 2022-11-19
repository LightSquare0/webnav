import { styled } from "@linaria/react";

export const InputContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: hsla(0, 0%, 15%, 0.6);
  border: 1px solid hsla(0, 0%, 22%, 1);
  border-radius: 0.625rem;
  &:focus-within {
    border: 1px solid hsla(22, 100%, 30%, 1);
  }
`;

export const HtmlInput = styled.input`
  width: 100%;
  height: 100%;
  padding-inline: 0.75rem;
  padding-block: 0.5rem;
  font-size: 1rem;
  color: white;
  border: none;
  outline: none;
  background-color: transparent;
`;
