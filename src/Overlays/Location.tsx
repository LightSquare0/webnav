import {
  LocationDistance,
  LocationIcon,
  LocationName,
  LocationResult,
} from "./DirectionsStyles";

export enum LocationIconType {
  location = "icons/location.svg",
  currentLocation = "icons/current-location.svg",
}

export interface LocationProps {
  type: LocationIconType;
  name: string;
  distance: number;
}

const Location: React.FC<LocationProps> = ({ type, name, distance }) => {
  return (
    <LocationResult>
      <LocationIcon src={type} />
      <LocationName>{name}</LocationName>
      <LocationDistance>{distance} km away</LocationDistance>
    </LocationResult>
  );
};

export default Location;
