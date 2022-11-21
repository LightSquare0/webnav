import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import useSWR from "swr";
import { useUserCoordsStore } from "../AppContext";
import Input from "../Controls/Input/Input";
import {
  DirectionsContainer,
  Header,
  LocationsCardStyled,
} from "./DirectionsStyles";
import LocationsPicker from "./LocationsPicker";
import LocationsSearcher from "./LocationsSearcher";
import shallow from "zustand/shallow";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export type LocationInputs = "firstLocation" | "secondLocation";

export function useFetchGeocoder(args: string, isReverseGeocoding: boolean) {
  const { data, error, isValidating } = useSWR(
    args.length > 0
      ? `https://api.mapbox.com/geocoding/v5/mapbox.places/${args}.json?types=place%2Cpostcode%2Caddress&limit=${
          isReverseGeocoding ? "1" : "10"
        }&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`
      : null,
    fetcher,
    { revalidateOnFocus: false }
  );
  return { data, error, isValidating };
}

const Directions = () => {
  const userCoordsState = useUserCoordsStore(
    (state) => state.userCoordsState,
    shallow
  );

  const [firstLocation, setFirstLocation] = useState<string>("");
  const [secondLocation, setSecondLocation] = useState<string>("");
  const [isReverseGeocoded, setIsReverseGeocoded] = useState<boolean>(false);
  const [focusedInput, setFocusedInput] =
    useState<LocationInputs>("firstLocation");
  const [args, setArgs] = useState<string>("");

  function setArgsAtCurrentLocation() {
    const { long, lat } = userCoordsState;

    return `${long},${lat}`;
  }

  useEffect(() => {
    // if (isReverseGeocoded) {
    //   if (focusedInput == "firstLocation") {
    //     console.log("hit");
    //     setArgs(setArgsAtCurrentLocation());
    //   }
    // } else {
    //   if (args == firstLocation) return;
    //   // setArgs(firstLocation);
    // }

    console.log(`args: ${args} == firstLocation: ${firstLocation}`);
    if (!isReverseGeocoded) {
      if (args == firstLocation) {
        console.log("args == firstLocation");
        return;
      }
      setArgs(firstLocation);
      return;
    }

    if (focusedInput == "firstLocation") {
      console.log("hit");
      setArgs(setArgsAtCurrentLocation());
    }
  }, [firstLocation, secondLocation, isReverseGeocoded, setArgs]);

  return (
    <DirectionsContainer>
      <LocationsSearcher
        firstLocation={firstLocation}
        secondLocation={secondLocation}
        setFirstLocation={setFirstLocation}
        setSecondLocation={setSecondLocation}
      />
      <LocationsPicker
        firstLocation={firstLocation}
        setFirstLocation={setFirstLocation}
        isReverseGeocoded={isReverseGeocoded}
        setIsReverseGeocoded={setIsReverseGeocoded}
        setArgs={setArgs}
        args={args}
      />
    </DirectionsContainer>
  );
};

export default Directions;
