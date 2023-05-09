import { NavBar } from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Box from "./Components/Info";
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
      </div>
    </>
  );
}
export default App;
