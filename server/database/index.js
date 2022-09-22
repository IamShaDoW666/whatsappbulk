const mysql2 = require('mysql2')
require('dotenv').config()
const db = mysql2.createPool({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }),
  setStatus = (_0x381a55, _0x4248d3) => {
    try {
      return (
        db.query(
          "UPDATE numbers SET status = '" +
            _0x4248d3 +
            "' WHERE body = " +
            _0x381a55 +
            ' '
        ),
        true
      )
    } catch (_0x3e9c31) {
      return false
    }
  }
function dbQuery(_0x333c46) {
  return new Promise((_0x3ddb40) => {
    db.query(_0x333c46, (_0x3787c5, _0x4fdb28) => {
      if (_0x3787c5) {
        throw _0x3787c5
      }
      try {
        _0x3ddb40(_0x4fdb28)
      } catch (_0x299d91) {
        _0x3ddb40({})
      }
    })
  })
}
module.exports = {
  setStatus: setStatus,
  dbQuery: dbQuery,
  db: db,
}