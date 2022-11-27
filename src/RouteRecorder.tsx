import { useEffect, useState } from "react";
import { useUserCoordsStore } from "./AppContext";

interface Points {
  coords: GeolocationCoordinates;
  timestamp: number;
}

const RouteRecorder: React.FC = () => {
  const userCoordsState = useUserCoordsStore((state) => state.userCoordsState);

  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [routeData, setRouteData] = useState<Array<Points>>([]);

  useEffect(() => {
    if (!isStarted) return;

    let point = {
      coords: {
        latitude: userCoordsState.latitude,
        longitude: userCoordsState.longitude,
        heading: userCoordsState.heading,
        speed: userCoordsState.speed,
        altitude: userCoordsState.altitude,
        altitudeAccuracy: userCoordsState.altitudeAccuracy,
        accuracy: userCoordsState.accuracy,
      },
      timestamp: Date.now(),
    };
    setRouteData((_routeData) => [..._routeData, point]);
  }, [isStarted, userCoordsState]);

  function handleStartStop() {
    setIsStarted(!isStarted);

    if (!isStarted) return;

    let routes = [];

    routes = JSON.parse(localStorage.getItem("routes") || "[]");
    routes.push(routeData);
    localStorage.setItem("routes", JSON.stringify(routes));

    setRouteData([]);
  }

  return (
    <button onClick={handleStartStop}>
      {isStarted ? <>Stop</> : <>Start</>} recording
    </button>
  );
};

export default RouteRecorder;
