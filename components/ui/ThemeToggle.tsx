"use client";

import { useState, useEffect } from "react";
import MoonIcon from "../svg/MoonIcon";
import SunIcon from "../svg/SunIcon";

export default function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="mr-6 flex self-center md:mr-8 xl:mb-6 xl:mr-0"
      onClick={toggleTheme}
      aria-label={`Change color scheme to ${
        theme === "light" ? "dark" : "light"
      }`}
      data-cy="themeToggle"
      type="button"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
