require('dotenv').config();
const mysql = require('mysql2/promise'); 


const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
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