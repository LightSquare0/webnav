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
import { DirectionsContainer, Header, LocationsPicker } from "./DirectionsStyles";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type LocationInputs = "firstLocation" | "secondLocation";

const Directions = () => {
  const userCoordsState = useUserCoordsStore((state) => state.userCoordsState);
  const [firstLocation, setFirstLocation] = useState<string>("");
  const [secondLocation, setSecondLocation] = useState<string>("");

  const [focusedInput, setFocusedInput] =
    useState<LocationInputs>("firstLocation");

  let args = firstLocation;

  if (focusedInput == "firstLocation") args = firstLocation;
  else args = secondLocation;

  function setArgsAtCurrentLocation() {
    const { long, lat } = userCoordsState;

    args = `${long},${lat}`;
    setFirstLocation(args);
  }

  const { data, error, isValidating } = useSWR(
    args.length > 0
      ? `https://api.mapbox.com/geocoding/v5/mapbox.places/${args}.json?types=place%2Cpostcode%2Caddress&limit=10&access_token=${
          import.meta.env.VITE_MAPBOX_TOKEN
        }`
      : null,
    fetcher
  );
  console.log(args);
  console.log(data);

  return (
    <DirectionsContainer>
      <LocationsPicker>
        <Header onClick={() => console.log("merge")}>Where to?</Header>
        <Input></Input>
      </LocationsPicker>
      {/* <input
        placeholder="First location"
        name="firstLocation"
        value={firstLocation}
        onFocus={() => setFocusedInput("firstLocation")}
        onChange={(e) => setFirstLocation(e.target.value)}
      />
      <input
        placeholder="Second location"
        name="secondLocation"
        value={secondLocation}
        onFocus={() => setFocusedInput("secondLocation")}
        onChange={(e) => setSecondLocation(e.target.value)}
      />
      <br />
      <div>
        <button onClick={() => setArgsAtCurrentLocation()}>
          Current location
        </button>

        {data &&
          data.features.map(
            (location: { place_name: any }) => location.place_name
          )}
      </div> */}
      
    </DirectionsContainer>
  );
};

export default Directions;
