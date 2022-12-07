import { useEffect, useState } from "react";
import { useUserCoordsStore } from "../../AppContext";
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
  found: boolean;
  reverseGeocoded: boolean;
}

const Directions = () => {
  const userCoordsState = useUserCoordsStore(
    (state) => state.userCoordsState,
    shallow
  );

  const [firstLocation, setFirstLocation] = useState<ILocation>({
    coords: "",
    address: "",
    query: "",
    found: false,
    reverseGeocoded: false,
  });

  const [secondLocation, setSecondLocation] = useState<ILocation>({
    coords: "",
    address: "",
    query: "",
    found: false,
    reverseGeocoded: false,
  });

  const [focusedInput, setFocusedInput] =
    useState<LocationInputs>("firstLocation");

  function getCurrentLocationAsString() {
    const { longitude, latitude } = userCoordsState;

    return `${longitude},${latitude}`;
  }

  function setCurrentLocationAsPoint() {
    let currentLocation = getCurrentLocationAsString();
    if (focusedInput == "firstLocation" && !secondLocation.reverseGeocoded)
      setFirstLocation({
        coords: currentLocation,
        address: "",
        query: "",
        found: true,
        reverseGeocoded: true,
      });
    else if (focusedInput == "secondLocation" && !firstLocation.reverseGeocoded)
      setSecondLocation({
        coords: currentLocation,
        address: "",
        query: "",
        found: true,
        reverseGeocoded: true,
      });
  }

  function handleLocationPicked(feature: any) {
    if (focusedInput == "firstLocation")
      setFirstLocation({
        ...firstLocation,
        query: feature.place_name,
        coords: feature.center.toString(),
        found: true,
      });

    if (focusedInput == "secondLocation")
      setSecondLocation({
        ...secondLocation,
        query: feature.place_name,
        coords: feature.center.toString(),
        found: true,
      });
  }

  function selectQuery() {
    if (firstLocation.found && focusedInput == "firstLocation" || secondLocation.found && focusedInput == "secondLocation") return "";

    if (firstLocation.reverseGeocoded || secondLocation.reverseGeocoded)
      return !firstLocation.reverseGeocoded
        ? firstLocation.query
        : secondLocation.query;

    if (focusedInput == "firstLocation") return firstLocation.query;
    else return secondLocation.query;
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
      <LocationsPicker
        query={selectQuery()}
        handleLocationPicked={handleLocationPicked}
        setCurrentLocationAsPoint={setCurrentLocationAsPoint}
      />
    </DirectionsContainer>
  );
};

export default Directions;
