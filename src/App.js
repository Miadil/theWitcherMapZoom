import Map from "./components/Map";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Regions from "./screens/Regions";
import Cities from "./screens/Cities";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/regions/:region" element={<Regions />} />
        <Route path="/cities/:city" element={<Cities />} />
      </Routes>
    </div>
  );
}

export default App;
