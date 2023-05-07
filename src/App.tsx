import { NavBar } from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Box from "./Components/Loginbox";
import "./App.css";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("light");
  return (
    <>
      <div id={color} style={{ width: "100vw", height: "100vh" }}>
        <div
          className="p-3 mb-2 bg-dark-subtle text-emphasis-dark  no_change"
          id={color}
        >
          <NavBar></NavBar>
          <Box></Box>
        </div>
        <div
          style={{ paddingBottom: "10vh" }}
          className="form-check form-switch position-absolute bottom-0 start-50 translate-middle"
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={() => {
              if (color == "dark") setColor("light");
              else setColor("dark");
            }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            <h6>{color == "dark" ? "Dark Mode" : "Light Mode"}</h6>
          </label>
        </div>
      </div>
    </>
  );
}
export default App;
