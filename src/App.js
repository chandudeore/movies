import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import ShowMvoie from "./components/ShowMvoie";

function App() {
  return (
    <div className="App">
      <AddMovie />
      <ShowMvoie />
    </div>
  );
}

export default App;
