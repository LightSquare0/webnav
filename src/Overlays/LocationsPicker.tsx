import { useEffect } from "react";
import { useFetchGeocoder } from "./Directions";
import { LocationsCardStyled } from "./DirectionsStyles";
import Location, { LocationIconType } from "./Location";

const LocationsPicker: React.FC<{
  setFirstLocation: React.Dispatch<React.SetStateAction<string>>;
  setArgs: React.Dispatch<React.SetStateAction<string>>;
  args: string;
  isReverseGeocoded: boolean;
  setIsReverseGeocoded: React.Dispatch<React.SetStateAction<boolean>>;
  setFoundFirstLocation: React.Dispatch<React.SetStateAction<boolean>>;
  firstLocation: string;
}> = ({
  setFirstLocation,
  setIsReverseGeocoded,
  setFoundFirstLocation,
  isReverseGeocoded,
  args,
  firstLocation,
  setArgs,
}) => {
  const { data } = useFetchGeocoder(args, isReverseGeocoded);

  useEffect(() => {
    if (isReverseGeocoded && data?.features.length >= 1) {
      setFirstLocation(data.features[0].place_name);
      setArgs(data.features[0].place_name);

      // console.log(data.features[0].place_name);
      console.log(`args: ${args} == firstLocation: ${firstLocation}`);

      setIsReverseGeocoded(false);
      setFoundFirstLocation(true);
    } else {
    }
  }, [isReverseGeocoded, setFirstLocation, data]);

  // console.log(data?.features[0].place_name);
  // console.log(args);
  console.log(data);

  return (
    <LocationsCardStyled>
      <button onClick={() => setIsReverseGeocoded(true)}>
        Current Location
      </button>
      <Location type={LocationIconType.location} name="Brasov" distance={102} />
      <Location type={LocationIconType.location} name="Brasov" distance={102} />
      <Location type={LocationIconType.location} name="Brasov" distance={102} />
    </LocationsCardStyled>
  );
};

export default LocationsPicker;
