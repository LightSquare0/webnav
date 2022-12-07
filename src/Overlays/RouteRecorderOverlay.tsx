import RouteRecorder from "../RouteRecorder";
import { LocationsCardStyled } from "./DirectionsStyles";

const RouteRecorderOverlay: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "21.25rem",
        height: "100%",
        // marginBottom: "80px",
        alignItems: "flex-end",
      }}
    >
      <LocationsCardStyled>
        <RouteRecorder />
      </LocationsCardStyled>
    </div>
  );
};

export default RouteRecorderOverlay;
