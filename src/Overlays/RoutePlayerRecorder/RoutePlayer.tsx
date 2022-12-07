import { styled } from "@linaria/react";
import { useEffect, useState } from "react";
import { Button } from "../../Controls/Button/Button";
import RouteStat from "./RouteStat";
import { route } from "../../route";
import { useUserCoordsStore } from "../../AppContext";

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.625rem;
`;

const RoutePlayer: React.FC = () => {
  const userCoordsState = useUserCoordsStore((state) => state.userCoordsState);

  const setUserCoordsState = useUserCoordsStore(
    (state) => state.setUserCoordsState
  );

  const [pointIdx, setPointIdx] = useState<number>(0);

  useEffect(() => {
    if (pointIdx == 0) {
      setUserCoordsState({
        ...userCoordsState,
        latitude: route[0][pointIdx].coords.latitude,
        longitude: route[0][pointIdx].coords.longitude,
      });
    }

    let timeout = setTimeout(() => {
      setPointIdx(pointIdx + 1);
      setUserCoordsState({
        ...userCoordsState,
        latitude: route[0][pointIdx].coords.latitude,
        longitude: route[0][pointIdx].coords.longitude,
      });
    }, route[0][pointIdx + 1].timestamp - route[0][pointIdx].timestamp);

    return () => {
      clearTimeout(timeout);
    };
  }, [pointIdx]);

  console.log(pointIdx);
  console.log(route[0][pointIdx]);

  return (
    <div>
      <StatsGrid>
        <RouteStat measurement="km/h" name="Average speed" value={64} />
        <RouteStat measurement="km" name="Distance" value={501} />
        <RouteStat measurement="hours" name="Time" value={4.3} />
        <RouteStat measurement="liters" name="Consumption" value={25} />
      </StatsGrid>
      <Button>Play route</Button>
    </div>
  );
};

export default RoutePlayer;
