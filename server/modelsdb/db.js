const Pool = require('pg').Pool
const pool = new Pool({
    user:"postgres",
    password: "Robime3993",
    host:"localhost",
    port:5432,
    database:"snakedb"
})

module.exports = pool