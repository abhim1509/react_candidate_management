import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage";
import NavigationBar from "./components/NavigationBar";
import Navigation from "./navigation/Navigation";
ReactDOM.render(
  <StrictMode>
    <Navigation></Navigation>
  </StrictMode>,
  document.getElementById("root")
);
