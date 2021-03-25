import { useState, useEffect } from "react";
import { DARK_MODE_LOCAL_STORAGE_KEY } from "./constants";

const initialDarkMode =
  (localStorage.darkMode === "true" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches) &&
  localStorage.darkMode !== "false";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const toggleDarkMode = () => {
    setDarkMode((previousDarkMode) => !previousDarkMode);
  };

  const setPreferredTheme = (event: MediaQueryListEvent) => {
    const hasDarkModePreference = event.matches;

    setDarkMode(hasDarkModePreference);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    prefersDarkMode.addEventListener("change", setPreferredTheme);

    return () => {
      prefersDarkMode.removeEventListener("change", setPreferredTheme);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, JSON.stringify(darkMode));
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};
