import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import Map, { GeolocateControl, Layer, Source, ViewState } from "react-map-gl";
import { FullscreenContainer, globalStyles } from "./Globals/GlobalStyles";
import { mapboxOverrides } from "./Globals/MapboxOverrides";
import { testRoute } from "./testRoute";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGlnaHRzcXVhcmUiLCJhIjoiY2w5d3FmeG8xMDA5ODN3cXc3cHRnb3R0YSJ9.4DHGDTGaKLOjDhBemnBXQQ";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function App() {
  const [viewport, setViewport] = useState<ViewState>({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14,
    bearing: 0,
    padding: [0, 0, 0, 0],
    pitch: 0,
  });

  // const { data, error, isValidating } = useSWR(
  //   "https://api.mapbox.com/directions/v5/mapbox/driving/28.65076%2C44.176716%3B25.610275%2C45.652309?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoibGlnaHRzcXVhcmUiLCJhIjoiY2w5d3FmeG8xMDA5ODN3cXc3cHRnb3R0YSJ9.4DHGDTGaKLOjDhBemnBXQQ",
  //   fetcher
  // );

  // if (isValidating) return <div>Loading</div>;

  const geojson = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: testRoute.routes[0].geometry.coordinates,
    },
    properties: {
      name: "Dinagat Islands",
    },
  };

  console.log();

  return (
    <div className={`${globalStyles} ${mapboxOverrides}`}>
      <FullscreenContainer>
        <Map
          initialViewState={{
            longitude: geojson.geometry.coordinates[0][0],
            latitude: geojson.geometry.coordinates[0][1],
            zoom: 18.5,
          }}
          mapStyle="mapbox://styles/lightsquare/cl9wqhokb00am14qtnwb7d0d3"
        >
          <GeolocateControl style={{ backgroundColor: "red" }} />
          {/*@ts-ignore*/}
          <Source id="polylineLayer" type="geojson" data={geojson}>
            <Layer
              id="lineLayer"
              type="line"
              source="my-data"
              layout={{
                "line-join": "round",
                "line-cap": "round",
              }}
              paint={{
                "line-color": "rgba(3, 170, 238, 0.5)",
                "line-width": 5,
              }}
            />
          </Source>
        </Map>
      </FullscreenContainer>
      <pre>{JSON.stringify(geojson, null, 4)}</pre>
    </div>
  );
}

export default App;
