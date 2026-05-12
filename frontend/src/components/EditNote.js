import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditNote = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getNoteById = async () => {
      const response = await axios.get(`https://be-rest-311135974217.us-central1.run.app/api/notes/${id}`);
      const data = Array.isArray(response.data) ? response.data[0] : response.data;
      setJudul(data.judul);
      setIsi(data.isi);
    };
    getNoteById();
  }, [id]);

  const updateNote = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://be-rest-311135974217.us-central1.run.app/api/notes/${id}`, { judul, isi });
      navigate("/");
    } catch (error) { console.error(error); }
  };

  return (
    <section className="view-section">
      <div className="form-header">
        <Link to="/" className="btn-secondary">&#8592; Kembali</Link>
        <h3>Edit Catatan</h3>
      </div>

      <div className="form-card">
        <form onSubmit={updateNote}>
          <div className="input-group">
            <label>Judul</label>
            <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Isi Catatan</label>
            <textarea rows="8" value={isi} onChange={(e) => setIsi(e.target.value)} required></textarea>
          </div>
          <button type="submit" className="btn-primary btn-block">Update</button>
        </form>
      </div>
    </section>
  );
};

export default EditNote;