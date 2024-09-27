const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_management",
});

db.connect((err) => {
  if (err) {
    console.log("Koneksi ke database gagal:", err);
  } else {
    console.log("Koneksi ke MySQL berhasil.");
  }
});

module.exports = db;
