import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const MyProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => {
    console.log(menu);
    setMenu((prev) => !prev); // Toggle the state using the previous state value
    console.log(!menu); // This will now log the new state correctly
  };

  return (
    <AppContext.Provider value={{ menu, handleMenuToggle }}>
      {children}
    </AppContext.Provider>
  );
};
