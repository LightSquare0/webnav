import { useEffect, useState } from "react";
import { useUserCoordsStore } from "../AppContext";
import { DirectionsContainer } from "./DirectionsStyles";
import LocationsPicker from "./LocationsPicker";
import LocationsSearcher from "./LocationsSearcher";
import shallow from "zustand/shallow";
import useFetchGeocoder from "./useFetchGeocoder";

export type LocationInputs = "firstLocation" | "secondLocation";

export interface ILocation {
  coords: string;
  address: string;
  query: string;
  reverseGeocoded: boolean;
}

const Directions = () => {
  // const { data } = useFetchGeocoder()

  const userCoordsState = useUserCoordsStore(
    (state) => state.userCoordsState,
    shallow
  );

  const [firstLocation, setFirstLocation] = useState<ILocation>({
    coords: "",
    address: "",
    query: "",
    reverseGeocoded: false,
  });

  const [secondLocation, setSecondLocation] = useState<ILocation>({
    coords: "",
    address: "",
    query: "",
    reverseGeocoded: false,
  });

  const [focusedInput, setFocusedInput] =
    useState<LocationInputs>("firstLocation");

  function getCurrentLocationAsString() {
    const { long, lat } = userCoordsState;

    return `${long},${lat}`;
  }

  function setCurrentLocationAsPoint() {
    let currentLocation = getCurrentLocationAsString();
    if (focusedInput == "firstLocation" && !secondLocation.reverseGeocoded)
      setFirstLocation({
        coords: currentLocation,
        address: "",
        query: "",
        reverseGeocoded: true,
      });
    else if (focusedInput == "secondLocation" && !firstLocation.reverseGeocoded)
      setSecondLocation({
        coords: currentLocation,
        address: "",
        query: "",
        reverseGeocoded: true,
      });
  }

  console.log(firstLocation);
  console.log(secondLocation);

  return (
    <DirectionsContainer>
      <LocationsSearcher
        firstLocation={firstLocation}
        secondLocation={secondLocation}
        setFirstLocation={setFirstLocation}
        setSecondLocation={setSecondLocation}
        setFocusedInput={setFocusedInput}
      />
      <LocationsPicker setCurrentLocationAsPoint={setCurrentLocationAsPoint} />
    </DirectionsContainer>
  );
};

export default Directions;
