const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "im2tupv30cps2j6w",
    password: "jwnokacv0no5n1jj",
    database: "yhxqs8v9hvtcil03"
});

module.exports = pool;
