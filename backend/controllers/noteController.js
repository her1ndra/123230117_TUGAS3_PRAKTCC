const Note = require('../models/noteModel');

const getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) return res.status(404).json({ message: 'Catatan tidak ditemukan' });
        res.json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addNote = async (req, res) => {
    try {
        const { judul, isi } = req.body;
        const result = await Note.create({ judul, isi });
        res.status(201).json({ message: 'Catatan ditambahkan!', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { judul, isi } = req.body;
        await Note.updateById(id, { judul, isi });
        res.json({ message: 'Catatan diperbarui!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await Note.deleteById(id);
        res.json({ message: 'Catatan dihapus!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getNotes,
    getNoteById,
    addNote,
    updateNote,
    deleteNote
};