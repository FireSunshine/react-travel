import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootStore } from "./store";

export const useSelector: TypedUseSelectorHook<RootStore> = useReduxSelector;
