import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const MyProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState("Initial State");

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </AppContext.Provider>
  );
};
