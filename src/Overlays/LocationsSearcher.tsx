import { LocationsCardStyled } from "./DirectionsStyles";
import Location from "./Location";

const LocationsSearcher: React.FC = () => {
  return (
    <LocationsCardStyled>
      <Location/>
      <Location/>
      <Location/>
    </LocationsCardStyled>
  )
  
  
};

export default LocationsSearcher;
