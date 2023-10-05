import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Titlebar } from "./components/TitleBar";
import { Inputfield } from "./components/inputfield";
import TodoList from "./components/todolist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <Titlebar></Titlebar>
      <Inputfield></Inputfield> */}
      <TodoList></TodoList>
    </div>
  );
}

export default App;
