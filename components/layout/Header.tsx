"use client";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header>
      Header
      <button onClick={() => setTheme("dark")}>Set to dark</button>
    </header>
  );
}
