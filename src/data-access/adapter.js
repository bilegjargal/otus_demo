const mysql = require("mysql");
const db = require("../../config/conf");

module.exports = async function() {

    const pool = mysql.createPool({
      connectionLimit: 10,
      host: db.host,
      user: db.user,
      password: db.password,
      port: db.port
    });

    pool.getConnection((err, connection) => {
        if (err) throw err;
        
        console.log("Creating connection");
        return connection;
    });
};
