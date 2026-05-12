import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const API_URL = "http://localhost:3000/api/notes";

  useEffect(() => { getNotes(); }, []);

  const getNotes = async () => {
    try {
      const response = await axios.get(API_URL);
      setNotes(response.data);
    } catch (error) { console.error("Gagal ambil data:", error); }
  };

  const deleteNote = async (id) => {
    if (window.confirm("Hapus catatan ini?")) {
      await axios.delete(`${API_URL}/${id}`);
      getNotes();
    }
  };

  return (
    <section id="list-view" className="view-section">
      <div className="list-header">
        <h3>Semua Catatan</h3>
        <Link to="/add" className="btn-primary">Tambah Catatan</Link>
      </div>
      
      <div className="notes-grid">
        {notes.length === 0 ? (
          <p style={{ color: "var(--text-sub)" }}>Belum ada catatan</p>
        ) : (
          notes.map((note) => (
            <div className="note-card" key={note.id}>
              <h3>{note.judul}</h3>
              <span className="date">
                {new Date(note.tanggal_dibuat).toLocaleString("id-ID")}
              </span>
              <p>{note.isi}</p>
              <div className="actions">
                <Link to={`/edit/${note.id}`} className="btn-edit">Edit</Link>
                <button className="btn-delete" onClick={() => deleteNote(note.id)}>Hapus</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default NoteList;