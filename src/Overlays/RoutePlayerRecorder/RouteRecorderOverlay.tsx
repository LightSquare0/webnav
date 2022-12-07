import { Button } from "../../Controls/Button/Button";
import useRouteRecorder from "../../useRouteRecorder";
import { LocationsCardStyled } from "../RoutePlanner/DirectionsStyles";
import RoutePlayer from "./RoutePlayer";

const RouteRecorderPlayerOverlay: React.FC = () => {
  const { handleStartStop, isStarted } = useRouteRecorder();
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
        <RoutePlayer />
        <Button onClick={handleStartStop}>
          {isStarted ? <>Stop recording</> : <>Start recording</>}
        </Button>
      </LocationsCardStyled>
    </div>
  );
};

export default RouteRecorderPlayerOverlay;
