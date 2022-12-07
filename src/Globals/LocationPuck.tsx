import { styled } from "@linaria/react";

export const LocationPuck = styled.div<{ rotation: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #ff7324;
  border-radius: 50%;
  border: 1px solid white;
  position: absolute;
  transform: rotate(${(props) => props.rotation});
`;

export const LocationPuckImage = styled.img`
  width: 30px;
  height: 30px;
`;
