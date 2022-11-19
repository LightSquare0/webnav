import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import {
  FullscreenContainer,
  globalStyles,
  InterfaceOverlay,
} from "./Globals/GlobalStyles";
import { mapboxOverrides } from "./Globals/MapboxOverrides";
import ExtentedMap from "./ExtentedMap";
import { useEffect } from "react";
import Directions from "./Overlays/Directions";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
const fetcher = (url: string) => fetch(url).then((r) => r.json());

function App() {
  // const { data, error, isValidating } = useSWR(
  //   "https://api.mapbox.com/directions/v5/mapbox/driving/28.65076%2C44.176716%3B25.610275%2C45.652309?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoibGlnaHRzcXVhcmUiLCJhIjoiY2w5d3FmeG8xMDA5ODN3cXc3cHRnb3R0YSJ9.4DHGDTGaKLOjDhBemnBXQQ",
  //   fetcher
  // );

  // if (isValidating) return <div>Loading</div>;

  // console.log(viewport);

  return (
    <div className={`${globalStyles} ${mapboxOverrides}`}>
      <FullscreenContainer>
        <ExtentedMap />
      </FullscreenContainer>
      <InterfaceOverlay>
        <Directions />
      </InterfaceOverlay>
    </div>
  );
}

export default App;
