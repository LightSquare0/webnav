import { ILocation } from "./Directions";
import { LocationsCardStyled } from "./DirectionsStyles";
import Location, { LocationIconType } from "./Location";

interface LocationsPickerProps {
  setCurrentLocationAsPoint: () => void;
}

const LocationsPicker: React.FC<LocationsPickerProps> = ({
  setCurrentLocationAsPoint,
}) => {
  return (
    <LocationsCardStyled>
      <button onClick={setCurrentLocationAsPoint}>Current Location</button>
      <Location type={LocationIconType.location} name="Brasov" distance={102} />
      <Location type={LocationIconType.location} name="Brasov" distance={102} />
      <Location type={LocationIconType.location} name="Brasov" distance={102} />
    </LocationsCardStyled>
  );
};

export default LocationsPicker;
