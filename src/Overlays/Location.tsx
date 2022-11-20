import { LocationDistance, LocationIcon, LocationName, LocationResult } from "./DirectionsStyles";

const Location: React.FC = () => {
  return (
    <LocationResult>
      <LocationIcon src="icons/location.svg"/>
      <LocationName>Brasov</LocationName>
      <LocationDistance>100 km away</LocationDistance>
    </LocationResult>
  )
  
};

export default Location;