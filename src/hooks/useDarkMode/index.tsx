import { useState, useEffect } from "react";

const initialDarkMode =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const onDarkModeChange = () => {
    setDarkMode((previousDarkMode) => !previousDarkMode);
  };

  return { darkMode, onDarkModeChange };
};
