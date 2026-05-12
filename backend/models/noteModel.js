const db = require('../config/database');

const findAll = async () => {
    const [rows] = await db.query('SELECT * FROM notes ORDER BY tanggal_dibuat DESC');
    return rows;
};

const create = async (noteData) => {
    const [result] = await db.query('INSERT INTO notes (judul, isi) VALUES (?, ?)', [noteData.judul, noteData.isi]);
    return result; 
};

const findById = async (id) => {
    const [rows] = await db.query('SELECT * FROM notes WHERE id = ?', [id]);
    return rows[0]; 
};

const updateById = async (id, noteData) => {
    const [result] = await db.query('UPDATE notes SET judul = ?, isi = ? WHERE id = ?', [noteData.judul, noteData.isi, id]);
    return result;
};

const deleteById = async (id) => {
    const [result] = await db.query('DELETE FROM notes WHERE id = ?', [id]);
    return result;
};

module.exports = {
    findAll,
    create,
    findById,
    updateById,
    deleteById,
};