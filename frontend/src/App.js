import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteList from "./components/NoteList.js";
import AddNote from "./components/AddNote.js";
import EditNote from "./components/EditNote.js";

function App() {
  return (
    <BrowserRouter>
      <header className="main-header">
        <div className="logo">Catatan<span>Ku</span></div>
      </header>
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;