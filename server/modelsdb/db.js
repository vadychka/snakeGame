const Pool = require('pg').Pool
const pool = new Pool({
    user:"rfeauvyqvtfowo",
    password: "03edb0c632245be063f10d40354e6f4de7dd8b4a7a428f1cc5c2daa2a4e5d870",
    host:"ec2-63-32-248-14.eu-west-1.compute.amazonaws.com",
    port:5432,
    database:"ddj04t1h7jkg6l",
    ssl: { rejectUnauthorized: false }
})


module.exports = pool
