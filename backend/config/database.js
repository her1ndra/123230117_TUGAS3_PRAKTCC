require('dotenv').config();
const mysql = require('mysql2/promise'); 


const dbPool = mysql.createPool({
    host: process.env.DB_HOST || '34.172.113.167',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'mypassword',
    database: process.env.DB_NAME || 'notes_123230117',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

dbPool.getConnection()
    .then((conn) => {
        console.log('Koneksi Database Berhasil!');
        conn.release();
    })
    .catch((err) => {
        console.error('Koneksi Database Gagal: ', err.message);
    });

module.exports = dbPool;