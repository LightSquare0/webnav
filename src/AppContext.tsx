import { ViewState } from "react-map-gl";
import create from "zustand";

interface ViewStateStore {
  viewState: ViewState;
  setViewState: (newViewState: ViewState) => void;
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
