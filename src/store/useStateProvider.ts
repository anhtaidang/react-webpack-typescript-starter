import { useContext } from "react";
import { ContextStore } from "./Context";

export const useStore = () => {
  const store = useContext(ContextStore);
  return store;
};
