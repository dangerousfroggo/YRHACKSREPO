import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const mountNode = document.getElementById("app");

if (mountNode) {
  const root = createRoot(mountNode);
  root.render(<App />);
} else {
  console.error("No #app element found!");
}
