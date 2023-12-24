
const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql2/promise');

const dp = mysql.createPool({
  host: process.env.DPhost,
  user: process.env.DPusername,
  password: process.env.DPpassword,
  database: process.env.DPname,
  connectionLimit: 50
});


module.exports=dp