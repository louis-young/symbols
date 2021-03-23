import { moon, sun } from "../../assets/icons";
import type { DarkModeToggleProps } from "./types";

export const DarkModeToggle = ({ darkMode, onDarkModeChange }: DarkModeToggleProps) => {
  return darkMode ? (
    <button onClick={onDarkModeChange} className="mr-4 w-6 h-6 text-white hover:opacity-80 transition duration-200">
      {sun}
    </button>
  ) : (
    <button onClick={onDarkModeChange} className="mr-4 w-6 h-6 text-gray-600 hover:opacity-80 transition duration-200">
      {moon}
    </button>
  );
};
