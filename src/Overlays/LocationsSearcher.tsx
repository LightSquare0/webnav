import { useState } from "react";
import Input from "../Controls/Input/Input";
import { ILocation, LocationInputs } from "./Directions";
import { Header, LocationsCardStyled } from "./DirectionsStyles";
import useFetchGeocoder from "./useFetchGeocoder";

interface LocationInputProps {
  icon: string;
  name: LocationInputs;
  placeholder: string;
  coords: string;
  setFocusedInput: React.Dispatch<React.SetStateAction<LocationInputs>>;
}

interface LocationsSearcherProps {
  firstLocation: ILocation;
  setFirstLocation: React.Dispatch<React.SetStateAction<ILocation>>;
  secondLocation: ILocation;
  setSecondLocation: React.Dispatch<React.SetStateAction<ILocation>>;
  setFocusedInput: React.Dispatch<React.SetStateAction<LocationInputs>>;
}

const LocationInput: React.FC<LocationInputProps> = ({
  icon,
  name,
  placeholder,
  coords,
  setFocusedInput,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data, error } = useFetchGeocoder(coords, true);

  const [prevCoords, setPrevCoords] = useState<string>(coords);
  if (data && coords != prevCoords && coords != "") {
    setPrevCoords(coords);
    setInputValue(data.features[0].place_name);
  }

  return (
    <Input
      icon={icon}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onFocus={(e) => setFocusedInput(e.target.name as LocationInputs)}
      onChange={(e) => setInputValue(e.target.value)}
    ></Input>
  );
};

const LocationsSearcher: React.FC<LocationsSearcherProps> = ({
  firstLocation,
  secondLocation,
  setFocusedInput,
}) => {
  return (
    <LocationsCardStyled>
      <Header>Where to?</Header>
      <LocationInput
        icon="icons/search.svg"
        name="firstLocation"
        placeholder="Start location"
        setFocusedInput={setFocusedInput}
        coords={firstLocation.coords}
      ></LocationInput>
      <LocationInput
        icon="icons/search.svg"
        name="secondLocation"
        placeholder="Destination"
        coords={secondLocation.coords}
        setFocusedInput={setFocusedInput}
      ></LocationInput>
    </LocationsCardStyled>
  );
};

export default LocationsSearcher;
