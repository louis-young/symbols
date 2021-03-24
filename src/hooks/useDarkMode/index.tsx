import { useState, useEffect } from "react";

const initialDarkMode =
  (localStorage.darkMode === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches) &&
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
    localStorage.darkMode = darkMode;
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
};
