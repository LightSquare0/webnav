import { Button } from "../Controls/Button/Button";
import Loading from "../Controls/Loading/Loading";
import { LoadingContainer, LocationsCardStyled } from "./DirectionsStyles";
import Location, { LocationIconType } from "./Location";
import useFetchGeocoder from "./useFetchGeocoder";

interface LocationsPickerProps {
  query: string;
  handleLocationPicked: (feature: any) => void;
  setCurrentLocationAsPoint: () => void;
}

const LocationsPicker: React.FC<LocationsPickerProps> = ({
  query,
  handleLocationPicked,
  setCurrentLocationAsPoint,
}) => {
  const { data, error, isValidating } = useFetchGeocoder(query, false);

  console.log(data);

  return (
    <LocationsCardStyled>
      <Button onClick={setCurrentLocationAsPoint}>Current Location</Button>
      {(isValidating || error) && (
        <LoadingContainer>
          {isValidating && <Loading />}
          {error && <div>Failed to fetch location data.</div>}
        </LoadingContainer>
      )}
      {data &&
        data.features.map((feature: any) => (
          <Location
            key={feature.id}
            type={LocationIconType.location}
            name={feature.place_name}
            distance={102}
            onClick={() => handleLocationPicked(feature)}
          />
        ))}
    </LocationsCardStyled>
  );
};

export default LocationsPicker;
