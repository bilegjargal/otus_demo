const mysql = require("mysql");
const db = require("../config/conf");

const dbConnection = undefined;

module.exports = function() {
  return function(req, res, next) {
    const pool = mysql.createPool({
      connectionLimit: 10,
      host: db.host,
      user: db.user,
      password: db.password,
      port: db.port
    });

    pool.getConnection((err, connection) => {
      if (dbConnection === undefined) {
        if (err) throw err;

        dbConnection = connection;
        req.db = dbConnection;

        console.log("Creating connection");
      } else {
        req.db = dbConnection;
        next();
      }
    });
  };
};
