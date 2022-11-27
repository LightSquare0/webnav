import { ViewState } from "react-map-gl";
import create from "zustand";
import { LocationProps } from "./Overlays/Location";
import { Sula } from "./RouteRecorder";

interface ViewStateStore {
  viewState: ViewState;
  setViewState: (newViewState: ViewState) => void;
}

interface UserCoordsStore {
  userCoordsState: GeolocationCoordinates;
  setUserCoordsState: (newUserCoordsState: GeolocationCoordinates) => void;
}

interface LocationResultsStore {
  locations: Array<LocationProps>;
  setLocationResultsState: (newUserCoordsState: Array<LocationProps>) => void;
}

export const useViewStateStore = create<ViewStateStore>((set) => ({
  viewState: {
    longitude: 25.609788,
    latitude: 45.652474,
    zoom: 14,
    bearing: 0,
    padding: { top: 0, left: 0, right: 0, bottom: 0 },
    pitch: 0,
  },
  setViewState: (newState) => set(() => ({ viewState: newState })),
}));

export const useUserCoordsStore = create<UserCoordsStore>((set) => ({
  userCoordsState: {
    longitude: 0,
    latitude: 0,
    accuracy: 0,
    heading: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    speed: 0,
  },
  setUserCoordsState: (newState) =>
    set(() => {
      console.log("updated usercoords store");
      return { userCoordsState: newState };
    }),
}));

export const useLocationsResultsStore = create<LocationResultsStore>((set) => ({
  locations: [],
  setLocationResultsState: (newState) => set(() => ({ locations: newState })),
}));
