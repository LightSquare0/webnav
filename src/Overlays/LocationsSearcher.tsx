import { useEffect, useState } from "react";
import Input from "../Controls/Input/Input";
import { ILocation } from "./Directions";
import { Header, LocationsCardStyled } from "./DirectionsStyles";
import useFetchGeocoder from "./useFetchGeocoder";

interface LocationInputProps {
  icon: string;
  name: string;
  placeholder: string;
  coords: string;
}

interface LocationsSearcherProps {
  firstLocation: ILocation;
  setFirstLocation: React.Dispatch<React.SetStateAction<ILocation>>;
  secondLocation: ILocation;
  setSecondLocation: React.Dispatch<React.SetStateAction<ILocation>>;
}

const LocationInput: React.FC<LocationInputProps> = ({
  icon,
  name,
  placeholder,
  coords,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data, error } = useFetchGeocoder(coords, true);

  const [prevCoords, setPrevCoords] = useState<string>(coords);
  if (
    data &&
    coords != prevCoords &&
    coords != ""
  ) {
    setPrevCoords(coords);
    setInputValue(data.features[0].place_name);
    console.log("sula");
  }
  
  return (
    <Input
      icon={icon}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></Input>
  );
};

const LocationsSearcher: React.FC<LocationsSearcherProps> = ({
  firstLocation,
  secondLocation,
}) => {
  return (
    <LocationsCardStyled>
      <Header>Where to?</Header>
      <LocationInput
        icon="icons/search.svg"
        name="startLocation"
        placeholder="Start location"
        coords={firstLocation.coords}
      ></LocationInput>
      <LocationInput
        icon="icons/search.svg"
        name="endLocation"
        placeholder="Destination"
        coords={secondLocation.coords}
      ></LocationInput>
    </LocationsCardStyled>
  );
};

export default LocationsSearcher;
