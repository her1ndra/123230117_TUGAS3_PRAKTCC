import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddNote = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const navigate = useNavigate();

  const saveNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://be-rest-311135974217.us-central1.run.app/api/notes", { judul, isi });
      navigate("/");
    } catch (error) { console.error(error); }
  };

  return (
    <section className="view-section">
      <div className="form-header">
        <Link to="/" className="btn-secondary">&#8592; Kembali</Link>
        <h3>Buat Catatan Baru</h3>
      </div>

      <div className="form-card">
        <form onSubmit={saveNote}>
          <div className="input-group">
            <label>Judul</label>
            <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Judul catatan" required />
          </div>
          <div className="input-group">
            <label>Isi Catatan</label>
            <textarea rows="8" value={isi} onChange={(e) => setIsi(e.target.value)} placeholder="Isi catatan" required></textarea>
          </div>
          <button type="submit" className="btn-primary btn-block">Simpan</button>
        </form>
      </div>
    </section>
  );
};

export default AddNote;