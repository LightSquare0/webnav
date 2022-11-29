import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import {
  FullscreenContainer,
  globalStyles,
  InterfaceOverlay,
  MiddleColumn,
} from "./Globals/GlobalStyles";
import { mapboxOverrides } from "./Globals/MapboxOverrides";
import ExtentedMap from "./ExtentedMap";
import Directions from "./Overlays/Directions";
import RouteRecorderOverlay from "./Overlays/RouteRecorderOverlay";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

function App() {
  return (
    <div className={`${globalStyles} ${mapboxOverrides}`}>
      <FullscreenContainer>
        <ExtentedMap />
      </FullscreenContainer>
      <InterfaceOverlay>
        <MiddleColumn>
          <Directions />
          <RouteRecorderOverlay />
        </MiddleColumn>
      </InterfaceOverlay>
    </div>
  );
}

export default App;
