"use client";

import { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  mode: string;
  toggle: () => void;
}

const defaultValue: ThemeContextType = {
  mode: "dark",
  toggle: () => {},
};
export const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
