import { useState } from "react";
import Input from "../Controls/Input/Input";
import { LocationInputs } from "./Directions";
import { Header, LocationsCardStyled } from "./DirectionsStyles";

const LocationsPicker: React.FC = () => {
  const [firstLocation, setFirstLocation] = useState<string>("");
  const [secondLocation, setSecondLocation] = useState<string>("");

  const [focusedInput, setFocusedInput] =
    useState<LocationInputs>("firstLocation");

  let args = firstLocation;

  return (
    <LocationsCardStyled>
      <Header>Where to?</Header>
      <Input
        icon="icons/search.svg"
        name="startLocation"
        placeholder="Start location"
        value={firstLocation}
      ></Input>
      <Input
        icon="icons/search.svg"
        name="endLocation"
        placeholder="Destination"
        value={secondLocation}
      ></Input>
    </LocationsCardStyled>
  );
};

export default LocationsPicker;
