const db = require("../config/db");
const bcrypt = require("bcryptjs");

const userModel = {
  findUser: (username) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM tbl_user WHERE username = ?";
      db.query(sql, [username], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  },

  addUser: (username, password) => {
    return new Promise(async (resolve, reject) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = "INSERT INTO tbl_user (username, password) VALUES (?, ?)";
      db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateUser: (id, username, password) => {
    return new Promise(async (resolve, reject) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = "UPDATE tbl_user SET username = ?, password = ? WHERE id = ?";
      db.query(sql, [username, hashedPassword, id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM tbl_user WHERE id = ?";
      db.query(sql, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  getUsers: () => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM tbl_user";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  },
};

module.exports = userModel;
