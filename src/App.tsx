import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Note from "./pages/Note";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/note" element={<Note />} />
    </Routes>
  );
}

export default App;
