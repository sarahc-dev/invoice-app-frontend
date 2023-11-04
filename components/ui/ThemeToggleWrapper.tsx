"use client";

import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function ThemeToggleWrapper() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </>
  );
}
