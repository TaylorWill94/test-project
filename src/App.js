import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./components/Store";

function App() {
  return (
    <div className="App">
      <h1>Hi, you can do it!</h1>
      <p>You will practice coding 30 mins per day</p>

      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
