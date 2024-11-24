const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',      // Host database
  user: 'root',           // Ganti dengan username MySQL Anda
  password: '', // Ganti dengan password MySQL Anda
  database: 'pawtodo', // Ganti dengan nama database Anda
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = connection;
