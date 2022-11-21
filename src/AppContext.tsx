import { ViewState } from "react-map-gl";
import create from "zustand";
import { LocationProps } from "./Overlays/Location";

interface ViewStateStore {
  viewState: ViewState;
  setViewState: (newViewState: ViewState) => void;
}

type Coordinates = {
  long: number;
  lat: number;
};

interface UserCoordsStore {
  userCoordsState: Coordinates;
  setUserCoordsState: (newUserCoordsState: Coordinates) => void;
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
    long: 0,
    lat: 0,
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
