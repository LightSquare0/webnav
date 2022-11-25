import { useEffect, useState } from "react";
import { useUserCoordsStore } from "../AppContext";
import { DirectionsContainer } from "./DirectionsStyles";
import LocationsPicker from "./LocationsPicker";
import LocationsSearcher from "./LocationsSearcher";
import shallow from "zustand/shallow";

export type LocationInputs = "firstLocation" | "secondLocation";

export interface ILocation {
  coords: string;
  address: string;
}

const Directions = () => {
  const userCoordsState = useUserCoordsStore(
    (state) => state.userCoordsState,
    shallow
  );

  const [firstLocation, setFirstLocation] = useState<ILocation>({
    coords: "",
    address: "",
  });
  const [secondLocation, setSecondLocation] = useState<ILocation>({
    coords: "",
    address: "",
  });
  const [focusedInput, setFocusedInput] =
    useState<LocationInputs>("firstLocation");

  function getCurrentLocationAsString() {
    const { long, lat } = userCoordsState;

    return `${long},${lat}`;
  }

  function setCurrentLocationAsPoint() {
    let currentLocation = getCurrentLocationAsString();
    setFirstLocation({ coords: currentLocation, address: "" });
  }

  return (
    <DirectionsContainer>
      <LocationsSearcher
        firstLocation={firstLocation}
        secondLocation={secondLocation}
        setFirstLocation={setFirstLocation}
        setSecondLocation={setSecondLocation}
      />
      <LocationsPicker setCurrentLocationAsPoint={setCurrentLocationAsPoint} />
    </DirectionsContainer>
  );
};

export default Directions;
