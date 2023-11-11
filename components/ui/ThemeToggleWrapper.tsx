"use client";

import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function ThemeToggleWrapper() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      <ThemeToggle theme={resolvedTheme} setTheme={setTheme} />
    </>
  );
}
