import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={App} />);