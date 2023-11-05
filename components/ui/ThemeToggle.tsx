"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Moon from "@/public/assets/icon-moon.svg";
import Sun from "@/public/assets/icon-sun.svg";
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

  useEffect(() => {
    const checkLocalStorage = localStorage.getItem("theme");
    if (!checkLocalStorage) {
      const checkDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(checkDarkTheme ? "dark" : "light");
    }
  }, [setTheme]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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
