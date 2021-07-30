import React from "react";
import { ContextStore } from "./Context";
import useGlobalState from "./useGlobalContext";

export const StateProvider: React.FC = ({ children }) => {
  const store = useGlobalState();

  return (
    <ContextStore.Provider value={store}>{children}</ContextStore.Provider>
  );
};
