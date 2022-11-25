import { useEffect, useState } from "react";
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
  location: ILocation;
  setLocationState: React.Dispatch<React.SetStateAction<ILocation>>;
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
  location,
  setLocationState,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [prevCoords, setPrevCoords] = useState<string>(coords);

  const { data, error } = useFetchGeocoder(coords, true);

  useEffect(() => {
    if (data) {
      setPrevCoords(coords);
      setInputValue(data.features[0].place_name);
    }
  }, [data, location]);
  
  // useEffect(() => {
  //   if (coords == prevCoords && location.query != inputValue) {
  //     setLocationState({ ...location, query: inputValue });
  //   }
  // }, [inputValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    // if (location.reverseGeocoded)
    //   setLocationState({
    //     ...location,
    //     query: inputValue,
    //     reverseGeocoded: false,
    //   });
  }

  return (
    <Input
      icon={icon}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onFocus={(e) => setFocusedInput(e.target.name as LocationInputs)}
      onChange={handleChange}
    ></Input>
  );
};

const LocationsSearcher: React.FC<LocationsSearcherProps> = ({
  firstLocation,
  secondLocation,
  setFirstLocation,
  setSecondLocation,
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
        location={firstLocation}
        setLocationState={setFirstLocation}
      ></LocationInput>
      <LocationInput
        icon="icons/search.svg"
        name="secondLocation"
        placeholder="Destination"
        coords={secondLocation.coords}
        setFocusedInput={setFocusedInput}
        location={secondLocation}
        setLocationState={setSecondLocation}
      ></LocationInput>
    </LocationsCardStyled>
  );
};

export default LocationsSearcher;
