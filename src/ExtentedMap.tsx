import mapboxgl from "mapbox-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import Map, {
  GeolocateControl,
  GeolocateResultEvent,
  Layer,
  Source,
} from "react-map-gl";
import { useUserCoordsStore, useViewStateStore } from "./AppContext";
import { testRoute } from "./testRoute";

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

const steps = testRoute.routes[0].legs[0].steps;

const ExtentedMap = () => {
  const viewState = useViewStateStore((state) => state.viewState);
  const setViewState = useViewStateStore((state) => state.setViewState);

  const userCoordsState = useUserCoordsStore((state) => state.userCoordsState);
  const setUserCoordsState = useUserCoordsStore(
    (state) => state.setUserCoordsState
  );

  const [mouseCoord, setMouseCoords] = useState({ lng: 0, lat: 0 });

  const copyLocationAtMouseCoords = (lgnlat: mapboxgl.LngLat) => {
    const { lng, lat } = lgnlat;
    navigator.clipboard.writeText(lng + " " + lat);
    console.log(lng + "\n" + lat);
  };

  const map = useRef(null);

  const geolocateControlRef = useCallback((ref: any) => {
    if (ref) {
      (async () => {
        while (!map.current)
          await (() => new Promise((resolve) => setTimeout(resolve, 200)))();
        ref.trigger();
      })();
    }
  }, []);

  function setUserCoords(e: GeolocateResultEvent) {
    const { longitude, latitude } = e.coords;

    setUserCoordsState({ long: longitude, lat: latitude });
  }

  return (
    <Map
      {...viewState}
      ref={map}
      onMove={(e) => setViewState(e.viewState)}
      onMouseMove={(e) => setMouseCoords(e.lngLat)}
      onClick={(e) => copyLocationAtMouseCoords(e.lngLat)}
      mapStyle="mapbox://styles/lightsquare/cl9wqhokb00am14qtnwb7d0d3"
    >
      <GeolocateControl
        trackUserLocation={true}
        ref={geolocateControlRef}
        onGeolocate={(e) => setUserCoords(e)}
      />
      {/* @ts-ignore */}
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
  );
};

export default ExtentedMap;
