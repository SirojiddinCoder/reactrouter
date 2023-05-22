import React, { createContext } from "react";

export const Data = createContext();

function ContextProvider({ children }) {
  let text = "hello";

  return <Data.Provider value={{ text }}>{children}</Data.Provider>;
}

export default ContextProvider;
