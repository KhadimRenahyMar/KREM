import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./styles/_reset.css";
import "./styles/index.scss";

import App from "./components/App/App";

const rootReactElement = (
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

const target: HTMLElement = document.getElementById("root")!;

createRoot(target).render(rootReactElement);
