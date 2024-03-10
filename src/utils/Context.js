"use client"
import { useState } from "react";

import { createContext } from "react";
export const themeContext = createContext();

export function ThemeProvider(props) {
  const [state, setState] = useState({ darkMode: false });

  const dispatch = (action) => {
    switch (action.type) {
      case "toggle":
        setState((prevState) => ({
          ...prevState,
          darkMode: !prevState.darkMode,
        }));
        break;
      default:
        break;
    }
  };

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
}


