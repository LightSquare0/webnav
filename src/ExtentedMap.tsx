import { url } from "inspector";
import mapboxgl from "mapbox-gl";
import { useCallback, useEffect, useRef, useState } from "react";
import Map, {
  GeolocateControl,
  GeolocateResultEvent,
  Layer,
  Marker,
  Source,
} from "react-map-gl";
import { useUserCoordsStore, useViewStateStore } from "./AppContext";
import { LocationPuck, LocationPuckImage } from "./Globals/LocationPuck";
import { testRoute2 } from "./testRoute2";

const route = {
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: testRoute2.routes[1].geometry.coordinates,
  },
};

const locationPuck = {
  type: "Feature",
  geometry: {
    type: "Point",
    coordinates: [-77.032, 38.913],
  },
  properties: {
    title: "Location Puck",
  },
};

const steps = testRoute2.routes[0].legs[0].steps;

const ExtentedMap = () => {
  const viewState = useViewStateStore((state) => state.viewState);
  const setViewState = useViewStateStore((state) => state.setViewState);

  const userCoordsState = useUserCoordsStore((state) => state.userCoordsState);
  const setUserCoordsState = useUserCoordsStore(
    (state) => state.setUserCoordsState
  );

  const [mouseCoord, setMouseCoords] = useState({ lng: 0, lat: 0 });

  const map = useRef(null);

  const copyLocationAtMouseCoords = (
    e: mapboxgl.MapLayerMouseEvent,
    lgnlat: mapboxgl.LngLat
  ) => {
    const { lng, lat } = lgnlat;
    navigator.clipboard.writeText(lng + " " + lat);
    console.log(lng + "\n" + lat);
    //@ts-ignore
    // let samp = map.current.queryRenderedFeatures(e.point);
    // console.log(samp);
  };

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
    const {
      longitude,
      latitude,
      accuracy,
      heading,
      speed,
      altitude,
      altitudeAccuracy,
    } = e.coords;

    setViewState({ ...viewState, longitude: longitude, latitude: latitude });
    setUserCoordsState(e.coords);
  }

  return (
    <Map
      {...viewState}
      ref={map}
      onMove={(e) => setViewState(e.viewState)}
      onMouseMove={(e) => setMouseCoords(e.lngLat)}
      onClick={(e) => copyLocationAtMouseCoords(e, e.lngLat)}
      mapStyle="mapbox://styles/lightsquare/cl9wqhokb00am14qtnwb7d0d3"
    >
      <Marker
        // anchor="center"
        latitude={userCoordsState.latitude}
        longitude={userCoordsState.longitude}
      >
        <LocationPuck rotation={userCoordsState.heading || 0}>
          <LocationPuckImage
            width="40"
            height="40"
            src="icons/navigation.svg"
          />
        </LocationPuck>
      </Marker>
      <GeolocateControl
        trackUserLocation={true}
        ref={geolocateControlRef}
        // onGeolocate={(e) => setUserCoords(e)}
        positionOptions={{
          enableHighAccuracy: true,
          timeout: 6000,
          maximumAge: 0,
        }}
      />
      {/* @ts-ignore */}
      <Source id="polylineLayer" type="geojson" data={route}>
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
