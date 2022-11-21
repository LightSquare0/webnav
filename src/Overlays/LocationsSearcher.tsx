import { useState } from "react";
import Input from "../Controls/Input/Input";
import { LocationInputs } from "./Directions";
import { Header, LocationsCardStyled } from "./DirectionsStyles";

interface LocationsSearcherProps {
  firstLocation: string;
  setFirstLocation: React.Dispatch<React.SetStateAction<string>>
  secondLocation: string;
  setSecondLocation: React.Dispatch<React.SetStateAction<string>>
}

const LocationsSearcher: React.FC<LocationsSearcherProps> = ({firstLocation, setFirstLocation, secondLocation, setSecondLocation}) => {

  return (
    <LocationsCardStyled>
      <Header>Where to?</Header>
      <Input
        icon="icons/search.svg"
        name="startLocation"
        placeholder="Start location"
        value={firstLocation}
        onChange={(e) => setFirstLocation(e.target.value)}
      ></Input>
      <Input
        icon="icons/search.svg"
        name="endLocation"
        placeholder="Destination"
        value={secondLocation}
        onChange={(e) => setSecondLocation(e.target.value)}
      ></Input>
    </LocationsCardStyled>
  );
};

export default LocationsSearcher;
