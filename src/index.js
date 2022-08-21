import ReactDOM from "react-dom/client";
import { BrouserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrouserRouter>
    <App />
  </BrouserRouter>
);
