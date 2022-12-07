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
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Location: React.FC<LocationProps> = ({
  type,
  name,
  distance,
  onClick,
}) => {
  return (
    <LocationResult onClick={onClick}>
      <LocationIcon src={type} />
      <LocationName>{name}</LocationName>
      <LocationDistance>{distance} km away</LocationDistance>
    </LocationResult>
  );
};

export default Location;
