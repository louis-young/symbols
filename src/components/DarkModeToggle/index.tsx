import classNames from "classnames";
import { moon, sun } from "../../assets/icons";
import type { DarkModeToggleProps } from "./types";

export const DarkModeToggle = ({ darkMode, toggleDarkMode }: DarkModeToggleProps) => {
  const darkModeToggleClasses = classNames({
    "mr-4 w-6 h-6 hover:opacity-80 transition duration-200": true,
    "text-white": darkMode,
    "text-gray-600": !darkMode,
  });

  const title = `Activate ${darkMode ? "Light" : "Dark"} Mode`;

  return darkMode ? (
    <button onClick={toggleDarkMode} className={darkModeToggleClasses} title={title}>
      {sun}
    </button>
  ) : (
    <button onClick={toggleDarkMode} className={darkModeToggleClasses} title={title}>
      {moon}
    </button>
  );
};
