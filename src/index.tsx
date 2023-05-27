import React from "react";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
