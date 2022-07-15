import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import ShowMvoie from "./components/ShowMvoie";
import UpdateMovie from "./components/UpdateMovie";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/add" className="link">
          AddMovie
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ShowMvoie />}></Route>
        <Route path="/add" element={<AddMovie />}></Route>
        <Route path="/update/:id" element={<UpdateMovie />}></Route>
      </Routes>
    </div>
  );
}

export default App;
