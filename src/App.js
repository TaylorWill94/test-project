import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hi, you can do it!</h1>
      <p>You will practice coding 30 mins per day</p>

      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
