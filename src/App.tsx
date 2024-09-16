import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Note from "./pages/Note";
import { NoteProvider } from "./context/NoteContex";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <NoteProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </NoteProvider>
  );
}

export default App;
