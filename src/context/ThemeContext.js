/* eslint-disable no-undef */
import React, { createContext } from "react";

export const themes = {
  light: {
    color: "#000",
    background: "skyblue",
  },
  dark: {
    color: "#fff",
    background: "navy",
  },
};

export const ThemeContext = createContext({});
